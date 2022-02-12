import Audio from "./audio";
import { getCanvas, prepareContext } from "./context";
import { cancelAllSubscriptions, Events, subscribe } from "./events";
import Scene from "./scene";
import sceneInfo from "./sceneInfo";

class GameControl {
  private scene?: Scene;

  private assetsLoaded = false;

  private shoot(e: MouseEvent) {
    this.scene?.shoot(e);
  }

  private aim(e: MouseEvent) {
    this.scene?.aim(e);
  }

  private registerControls() {
    this.shoot = this.shoot.bind(this);
    this.aim = this.aim.bind(this);

    getCanvas().addEventListener("click", this.shoot);
    getCanvas().addEventListener("mousemove", this.aim);
  }

  private removeControls() {
    getCanvas().removeEventListener("click", this.shoot);
    getCanvas().removeEventListener("mousemove", this.aim);
  }

  isAssetsLoaded() {
    return this.assetsLoaded;
  }

  // eslint-disable-next-line class-methods-use-this
  getScore() {
    return sceneInfo.score;
  }

  // eslint-disable-next-line class-methods-use-this
  isSoundEnabled() {
    return sceneInfo.sound;
  }

  // eslint-disable-next-line class-methods-use-this
  setSound(enabled: boolean) {
    sceneInfo.sound = enabled;
  }

  // eslint-disable-next-line class-methods-use-this
  play() {
    sceneInfo.paused = false;
  }

  init(canvas: HTMLCanvasElement) {
    prepareContext(canvas);

    this.scene = new Scene();

    const { scene } = this;

    Audio.init();

    if (this.assetsLoaded) {
      scene.run();
    }

    subscribe(Events.ASSETS_LOADED, () => {
      scene.run();
      this.assetsLoaded = true;
    });

    this.registerControls();

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
    this.removeControls();
  }
}

const gameControl = new GameControl();

export default () => gameControl;
