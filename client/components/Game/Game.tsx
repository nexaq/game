import { create } from "client/api/game";
import Grid from "client/components/Grid";
import getGameControl from "client/game";
import { heightRatio } from "client/game/scene/context";
import { Events, subscribe } from "client/game/scene/events";
import useRequest from "client/hooks/useRequest";
import React, { useEffect, useRef, useState } from "react";

import AudioControl from "./components/AudioControl";
import FullScreenControl from "./components/FullScreenControl";
import Loading from "./components/Loading";
import PlayScreen from "./components/PlayScreen";
import RestartScreen from "./components/RestartScreen";
import Score from "./components/Score";
import css from "./style.module.pcss";
import { Props } from "./types";

const Game: Props = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState(!getGameControl().isAssetsLoaded());
  const { getScore } = getGameControl();
  const [, registerResult] = useRequest();

  useEffect(() => {
    if (canvasRef.current) {
      getGameControl().init(canvasRef.current);

      subscribe(Events.ASSETS_LOADED, () => {
        setLoading(false);
      });

      subscribe(Events.END_GAME, () => {
        const score = getScore();
        registerResult(() =>
          create({
            score,
          })
        );
      });
    }

    return () => {
      getGameControl().destroy();
    };
  }, []);

  return (
    <>
      <div className={css.container} ref={containerRef}>
        <Grid cols={2} className={css.controls}>
          <FullScreenControl containerRef={containerRef} />
          <AudioControl />
        </Grid>
        <Score />
        <PlayScreen />
        <RestartScreen />
        <Loading active={isLoading} />
        <canvas
          ref={canvasRef}
          className={css.canvas}
          width={1800}
          height={1800 * heightRatio}
        />
      </div>
    </>
  );
};

export default Game;
