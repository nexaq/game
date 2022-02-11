import {StaticSceneObject} from "../abstract";
import assetManager from "../../assetManager/AssetManager";
import {getCtx} from "../context";

export default class Player extends StaticSceneObject {
    private readonly radius: number;
    private angle: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this.radius = radius;
        this.angle = 0;
    }

    getRadius() {
        return this.radius;
    }

    update() {
        this.draw();
    }

    setAngle(angle: number) {
        this.angle = angle;
    }


    draw() {
        const ratio = 43 / 120;

        const imageScale = 1.1;

        const imageHeight = this.radius * 2 * imageScale;
        const imageWidth = ratio * imageHeight * imageScale;

        const imageX = this.x - imageWidth / 2;
        const imageY = this.y - imageHeight / 2;

        getCtx().save();
        getCtx().translate(imageX + imageWidth / 2, imageY + imageHeight / 2);
        getCtx().rotate(this.angle);
        getCtx().translate(-imageX - imageWidth / 2, -imageY - imageHeight / 2);
        getCtx().drawImage(assetManager.getImage('playerImage'), imageX, imageY, imageWidth, imageHeight);
        getCtx().restore();
    }
}