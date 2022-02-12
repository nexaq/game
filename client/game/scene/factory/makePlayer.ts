import { Player } from "../activeEntities";
import { getCanvas } from "../context";

export default function makePlayer() {
  const x = getCanvas().width / 2;
  const y = getCanvas().height / 2;

  return new Player(x, y, 60);
}
