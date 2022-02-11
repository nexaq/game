export default abstract class StaticSceneObject {
    protected x: number;
    protected y: number;

    protected constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    abstract update(): void;
    abstract draw(): void;

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}