import getGameControl from "client/game";
import React, { useState } from "react";

import Screen from "../Screen";
import { Props } from "./types";

const PlayScreen: Props = () => {
  const [active, setActive] = useState(true);

  return (
    <Screen
      active={active}
      buttonText="Play"
      onClick={() => {
        setActive(false);
        getGameControl().play();
      }}
    />
  );
};

export default PlayScreen;
