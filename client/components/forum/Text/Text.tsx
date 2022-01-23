import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const Text: Props = ({children, className = ''}) => {

    return (
        <div className={`${css.commentText} ${className}`}>
            {children}
        </div>
    );
};

export default Text;
