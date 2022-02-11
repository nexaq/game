import {Enemy, Explosion, Player, Projectile} from "./activeEntities";
import {getCanvas, getCtx} from "./context";
import {getMouseContextOffsetInCanvas} from "../helpers/getMouseContextOffsetInCanvas";
import assetManager from "../assetManager/AssetManager";
import {touchesSide} from "../helpers/touchesSide";
import {makeEnemy} from "./factory/makeEnemy";
import {explosionAudioSrc, explosionImageSrc, gunShotAudioSrc, playerImageSrc} from "../assets";
import {Events, trigger, subscribe} from "./events";
import makePlayer from "./factory/makePlayer";
import sceneInfo, {resetSceneInfo} from "./sceneInfo";

export default class Scene {
    player: Player;
    projectiles: Projectile[] = [];
    enemies: Enemy[] = [];
    explosion?: Explosion;

    animationId?: number;

    id: string;

    constructor() {
        this.id = Math.floor(Math.random() * 100).toString();

        this.subscribe();
        this.player = Scene.makePlayer();
    }

    private static makePlayer() {
        return makePlayer();
    }

    private static getInfo() {
        return sceneInfo;
    }

    private subscribe() {
        subscribe(Events.PLAY, () => {
            Scene.getInfo().paused = false;
        });

        subscribe(Events.PAUSE, () => {
            Scene.getInfo().paused = true;
        });

        subscribe(Events.END_GAME, () => {
            trigger(Events.PAUSE);
            this.endGame();
        });
    }

    aim(event: MouseEvent) {
        const canvas = getCanvas();
        const offset = getMouseContextOffsetInCanvas(canvas, event);
        const angle = Math.atan2(offset.top - canvas.height / 2, offset.left - canvas.width / 2);

        this.player.setAngle(angle + 1.5);
    }

    shoot(event: MouseEvent) {
        const canvas = getCanvas();
        const offset = getMouseContextOffsetInCanvas(canvas, event);
        const angle = Math.atan2(offset.top - canvas.height / 2, offset.left - canvas.width / 2);

        const velocity = {
            x: Math.cos(angle) * 400,
            y: Math.sin(angle) * 400
        };

        const projectile = new Projectile(canvas.width / 2, canvas.height / 2, 2, 'red', velocity);


        this.projectiles.push(projectile);

        trigger(Events.SHOOT);
    }

    private static resetFrame() {
        const canvas = getCanvas();
        getCtx().fillStyle = 'rgba(0, 0, 0)';
        getCtx().fillRect(0, 0, canvas.width, canvas.height);
    }

    private static prepareNextFrame() {
        const canvas = getCanvas();
        getCtx().fillStyle = 'rgba(0, 0, 0, 0.07)';
        getCtx().fillRect(0, 0, canvas.width, canvas.height);
    }

    private removeGarbageProjectiles() {
        this.projectiles.forEach((projectile, index) => {

            projectile.update();

            if (touchesSide(projectile)) {
                this.projectiles.splice(index, 1);
            }
        })
    }

    private animate() {

        this.animationId = requestAnimationFrame(this.animate.bind(this));

        Scene.prepareNextFrame();

        if (this.explosion) {
            this.explosion.update();
        }

        if (Scene.getInfo().paused) {
            return;
        }

        this.spawnEnemies();
        this.removeGarbageProjectiles();

        this.updateEnemies();

        this.player.update();
    }

    private spawnEnemies() {
        const enemySpawned = makeEnemy();
        if (enemySpawned) {
            this.enemies.push(enemySpawned);
        }
    }

    private updateEnemies() {
        this.enemies.forEach((enemy, enemyIndex) => {
            enemy.update();

            const distance = Math.hypot(this.player.getX() - enemy.getX(), this.player.getY() - enemy.getY());

            const endGame = distance - enemy.getRadius() - this.player.getRadius() < 1;
            if (endGame) {
                trigger(Events.END_GAME);
            }

            this.projectiles.forEach((projectile, projectileIndex) => {
                this.projectileToucheEnemy(projectile, projectileIndex, enemy, enemyIndex);
            });
        })
    }

    private static scoreUp() {
        Scene.getInfo().score++;
    }

    private projectileToucheEnemy(projectile: Projectile, projectileIndex: number, enemy: Enemy, enemyIndex: number) {
        const distance = Math.hypot(projectile.getX() - enemy.getX(), projectile.getY() - enemy.getY());

        const objectsTouched = distance - enemy.getRadius() - projectile.getRadius() < 1;

        if (objectsTouched) {
            this.enemies.splice(enemyIndex, 1);
            this.projectiles.splice(projectileIndex, 1);

            Scene.scoreUp();

            trigger(Events.ENEMY_KILLED);
        }
    }

    private endGame() {
        const canvas = getCanvas();
        this.explosion = new Explosion(canvas.width / 2, canvas.height / 2);
    }

    public run() {
        this.animate();
    }

    destroyObjects() {
        this.enemies = [];
        this.projectiles = [];
        this.explosion = undefined;
    }

    destroy() {
        this.destroyObjects();
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        resetSceneInfo();
    }

    restart() {
        this.destroyObjects();

        Scene.resetFrame();

        resetSceneInfo();

        trigger(Events.RESTART_GAME);
    }

    preloadAssets() {
        assetManager.loadImage('explosionImage', explosionImageSrc);
        assetManager.loadImage('playerImage', playerImageSrc);
        assetManager.loadAudio('gunShotAudio', gunShotAudioSrc, 0.5);
        assetManager.loadAudio('explosionAudio', explosionAudioSrc);
    }
}