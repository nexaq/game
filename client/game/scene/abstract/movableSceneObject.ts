import {AnimatedSceneObject, Velocity} from "./index";

export default abstract class MovableSceneObject extends AnimatedSceneObject {
    private readonly velocity: Velocity;

    protected constructor(x: number, y: number, velocity: Velocity) {
        super(x, y);
        this.velocity = velocity;
    }

    getVelocity() {
        return this.velocity;
    }
}