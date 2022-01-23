import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const Inner: Props = ({children, className = ''}) => {
    return (
        <div className={`${css.inner} ${className}`}>
            {children}
        </div>
    );
};

export default Inner;
