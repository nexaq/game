import {MovableSceneObject, Velocity} from "../abstract";
import {getCtx} from "../context";

export default class Projectile extends MovableSceneObject {
    private readonly radius: number;
    private color: string;

    constructor(x: number, y: number, radius: number, color: string, velocity: Velocity) {
        super(x, y, velocity);
        this.radius = radius;
        this.color = color;
    }

    draw() {
        getCtx().beginPath();
        getCtx().arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        getCtx().fillStyle = 'white';
        getCtx().fill();
    }

    getRadius() {
        return this.radius;
    }

    update() {
        this.draw();

        const timePassed = this.getTimePassed();

        const {x: velocityX, y: velocityY} = this.getVelocity();

        this.x = this.startedX + timePassed * velocityX;
        this.y = this.startedY + timePassed * velocityY;
    }
}
