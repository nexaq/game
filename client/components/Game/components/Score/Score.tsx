import React, {useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import css from "./style.module.pcss";
import getGameControl from "client/game/scene/gameControl";
import {Events, subscribe} from "client/game/scene/events";

const Score: Props = () => {
    const {getScore} = getGameControl();


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