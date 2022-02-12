import { SceneInfo } from "./abstract";

const initial: SceneInfo = {
  score: 0,
  paused: true,
  sound: true,
};

const sceneInfo: SceneInfo = { ...initial };

export const resetSceneInfo = () => {
  sceneInfo.score = initial.score;
  sceneInfo.paused = initial.paused;
};

export default sceneInfo;
