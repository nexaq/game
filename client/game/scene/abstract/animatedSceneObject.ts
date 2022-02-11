import {StaticSceneObject} from "./index";
import nowInSeconds from "../../helpers/nowInSeconds";

export default abstract class AnimatedSceneObject extends StaticSceneObject {
    protected startedX: number;
    protected startedY: number;
    private readonly animationStarted: number;

    protected constructor(x: number, y: number) {
        super(x, y);
        this.animationStarted = nowInSeconds();
        this.startedX = this.x;
        this.startedY = this.y;
    }

    getAnimationStarted() {
        return this.animationStarted;
    }

    getTimePassed() {
        return nowInSeconds() - this.animationStarted;
    }
}