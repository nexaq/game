import assetManager from "../../assetManager/AssetManager";
import { AnimatedSceneObject } from "../abstract";
import { getCtx } from "../context";

export default class Explosion extends AnimatedSceneObject {
  private frame: number;

  constructor(x: number, y: number) {
    super(x, y);
    this.frame = 0;
  }

  draw() {
    const spriteSize = 64;

    const imageWidth = 370;
    const imageHeight = 370;

    const imageX = this.x - imageWidth / 2;
    const imageY = this.y - imageHeight / 2;

    getCtx().drawImage(
      assetManager.getImage("explosionImage"),
      this.frame * spriteSize,
      0,
      spriteSize,
      spriteSize,
      imageX,
      imageY,
      imageWidth,
      imageHeight
    );
  }

  update() {
    const timePassed = this.getTimePassed();
    const explosionSpeed = 15;
    const frame = Math.floor(timePassed * explosionSpeed);

    if (frame < 26) {
      this.frame = frame;
    }

    this.draw();
  }
}
