import { Events, subscribe } from "client/game/scene/events";
import getGameControl from "client/game/scene/gameControl";
import React, { useEffect, useState } from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Score: Props = () => {
  const { getScore } = getGameControl();

  const [score, setScore] = useState(getScore());

  useEffect(() => {
    subscribe(Events.ENEMY_KILLED, () => {
      setScore(getScore());
    });

    subscribe(Events.RESTART_GAME, () => {
      setScore(getScore());
    });
  }, []);

  return <div className={css.score}>Kills: {score}</div>;
};

export default Score;
