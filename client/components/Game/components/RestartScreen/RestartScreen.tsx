import React, {useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import Screen from "../Screen";
import {Events, subscribe} from "../../../../game/scene/events";
import getGameControl from "../../../../game";

const RestartScreen: Props = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        subscribe(Events.END_GAME, () => {
            setTimeout(() => setActive(true), 1000);
        });
    }, []);

    return <Screen
        active={active}
        title={'You died!'}
        buttonText={'Restart'}
        onClick={() => {
            getGameControl().restart();
            setActive(false);
        }}
    />
};

export default RestartScreen;