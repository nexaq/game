import Scene from "./scene";
import {getCanvas, prepareContext} from "./context";
import Audio from "./audio";
import {cancelAllSubscriptions, Events, subscribe} from "./events";
import sceneInfo, {resetSceneInfo} from "./sceneInfo";

class GameControl {
    private scene?: Scene;
    private assetsLoaded = false;

    private registerControls(scene: Scene) {
        getCanvas().addEventListener('click', (e) => scene.shoot(e));
        getCanvas().addEventListener('mousemove', (e) => scene.aim(e));
    }

    isAssetsLoaded() {
        return this.assetsLoaded;
    }

    getScore() {
        return sceneInfo.score;
    }

    isSoundEnabled() {
        return sceneInfo.sound;
    }

    setSound(enabled: boolean) {
        sceneInfo.sound = enabled;
    }

    play() {
        sceneInfo.paused = false;
    }

    init(canvas: HTMLCanvasElement) {
        prepareContext(canvas);

        this.scene = new Scene();

        const scene = this.scene;

        Audio.init();

        if (this.assetsLoaded) {
            scene.run();
        }

        subscribe(Events.ASSETS_LOADED, () => {
            scene.run();
            this.assetsLoaded = true;
        });

        this.registerControls(scene);

        scene.preloadAssets();

        return scene;
    }

    private restartGame() {
        this.scene?.restart();
        this.play();
    }

    restart() {
        this.restartGame();
    }

    destroy() {
        this.scene?.destroy();
        cancelAllSubscriptions();
    }
}

let gameControl = new GameControl();

export default () => gameControl;