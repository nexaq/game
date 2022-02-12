import getGameControl from "client/game";
import { Events, subscribe } from "client/game/scene/events";
import React, { useEffect, useState } from "react";

import Screen from "../Screen";
import { Props } from "./types";

const RestartScreen: Props = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    subscribe(Events.END_GAME, () => {
      setTimeout(() => setActive(true), 1000);
    });
  }, []);

  return (
    <Screen
      active={active}
      title="You died!"
      buttonText="Restart"
      onClick={() => {
        getGameControl().restart();
        setActive(false);
      }}
    />
  );
};

export default RestartScreen;
