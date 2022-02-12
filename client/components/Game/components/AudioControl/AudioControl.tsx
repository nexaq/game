import getGameControl from "client/game/scene/gameControl";
import React, { useState } from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const AudioControl: Props = () => {
  const { isSoundEnabled } = getGameControl();

  const [soundEnabled, setSound] = useState(isSoundEnabled());

  const toggleSound = () => {
    setSound(!soundEnabled);
    getGameControl().setSound(!soundEnabled);
  };

  const soundEnabledClassName = !soundEnabled ? css.audio_off : "";

  return (
    <button
      className={`${css.audio} ${soundEnabledClassName}`}
      onClick={toggleSound}
    />
  );
};

export default AudioControl;
