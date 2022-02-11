import {getCanvas} from "../scene/context";
import {StaticSceneObject} from "../scene/abstract";

interface Radius {
    getRadius(): number
}

export function touchesSide(object: StaticSceneObject & Radius) {
    const canvas = getCanvas();

    const touchedLeftSide = object.getX() + object.getRadius() < 0;
    const touchedRightSide = object.getX() - object.getRadius() > canvas.width;

    const touchedTop = object.getY() + object.getRadius() < 0;
    const touchedBottom = object.getY() - object.getRadius() > canvas.height;

    return touchedLeftSide || touchedRightSide || touchedTop || touchedBottom;
}