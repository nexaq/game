import React, {useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import Screen from "../Screen";
import getGameControl from "client/game";

const PlayScreen: Props = () => {

    const [active, setActive] = useState(true);


    return <Screen
        active={active}
        buttonText={'Play'}
        onClick={() => {
            setActive(false);
            getGameControl().play();
        }}
    />
};

export default PlayScreen;