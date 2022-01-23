import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const InfoBar: Props = ({
                            items,
                            className = ''
                        }) => {
    return <div className={`${css.infoBar} ${className}`}>
        {items.map((item, key) => {
            const dot = (key < items.length - 1) ? <div className={css.dot}/> : null;
            return <>
                <div className={css.item}>
                    {item}
                </div>
                {dot}
            </>;
        })}
    </div>
};

export default InfoBar;