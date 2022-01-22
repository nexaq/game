import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const Heading: Props = ({ level, children, className, addLine = false }) => {
    return (
        <>
            {
                React.createElement(level, {
                    className: `${css.heading} ${className ?? ''}`
                }, <>
                    {children}
                    {addLine && <div className={css.line} />}
                </>)
            }
        </>
    );
};

export default Heading;