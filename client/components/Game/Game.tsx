import React, {useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import getGameControl from "client/game";
import RestartScreen from "./components/RestartScreen";
import PlayScreen from "./components/PlayScreen";
import AudioControl from "./components/AudioControl";
import Score from "./components/Score";
import FullScreenControl from "./components/FullScreenControl";
import Grid from "../Grid";
import {heightRatio} from "client/game/scene/context";
import {Events, subscribe} from "client/game/scene/events";
import Loading from "./components/Loading";

const Game: Props = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setLoading] = useState(!getGameControl().isAssetsLoaded());

    useEffect(() => {
        if (canvasRef.current) {
            getGameControl().init(canvasRef.current);

            subscribe(Events.ASSETS_LOADED, () => {
                setLoading(false);
            });
        }

        return () => {
            getGameControl().destroy();
        }
    }, []);

    return (
        <>
            <div className={css.container} ref={containerRef}>
                <Grid cols={2}  className={css.controls}>
                    <FullScreenControl containerRef={containerRef} />
                    <AudioControl />
                </Grid>
                <Score />
                <PlayScreen />
                <RestartScreen />
                <Loading active={isLoading} />
                <canvas ref={canvasRef} className={css.canvas} width={1800} height={1800 * heightRatio} />
            </div>
        </>
    );
};

export default Game;