import React, {useEffect, useState} from 'react';
import {Props} from './types';
import Heading from "../@typography";

const Loading: Props = ({ delay = 0 }) => {

    const [active, setActive] = useState(!delay);
    useEffect(() => {
        if (delay > 0) {
            setTimeout(() => setActive(true), delay);
        }
    }, []);

    return <>
        {active && <Heading level={'h3'}>Loading...</Heading>}
    </>;
}

export default Loading;