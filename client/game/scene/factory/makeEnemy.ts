import nowInSeconds from "../../helpers/nowInSeconds";
import { Enemy } from "../activeEntities";
import { getCanvas } from "../context";

let lastTimeSpawned = nowInSeconds();

export function makeEnemy(): Enemy | undefined {
  const now = nowInSeconds();

  if (now - lastTimeSpawned < 1) {
    return undefined;
  }

  const canvas = getCanvas();

  const radius = 9 + Math.random() * 12;

  let x;
  let y;

  if (Math.random() < 0.5) {
    x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
    y = Math.random() * canvas.height;
  } else {
    x = Math.random() * canvas.width;
    y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
  }

  const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
  const velocity = {
    x: Math.cos(angle) * 200,
    y: Math.sin(angle) * 200,
  };

  // const hue = Math.random() * 360;
  const hue = Math.random() * 25;
  const color = `hsl(${hue}, 90%, 50%)`;

  lastTimeSpawned = now;

  return new Enemy(x, y, radius, color, velocity);
}
