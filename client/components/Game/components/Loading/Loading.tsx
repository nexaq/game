import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const Loading: Props = ({active}) => {
    return <>
        {active && <div className={css.loading}>
            <div>
                Loading...
            </div>
        </div>}
    </>
};

export default Loading;