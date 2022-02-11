import React, {useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import css from "./style.module.pcss";
import getGameControl from "client/game/scene/gameControl";

const AudioControl: Props = () => {
    const {isSoundEnabled} = getGameControl();

    const [soundEnabled, setSound] = useState(isSoundEnabled());

    const toggleSound = () => {
        setSound(!soundEnabled);
        getGameControl().setSound(!soundEnabled);
    }

    const soundEnabledClassName = !soundEnabled ? css.audio_off : '';

    return <>
        <button className={`${css.audio} ${soundEnabledClassName}`} onClick={toggleSound} />
    </>
};

export default AudioControl;