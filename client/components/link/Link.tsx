import React from 'react';
import {Link as ReactLink} from "react-router-dom";
import {Props} from "./types";
import css from './style.module.pcss';

const Link: Props = ({to, children, className, external = false}) => {
    const currentClassName = `${css.link} ${className ?? ''}`;

    if (external) {
        return(
            <a href={to} className={currentClassName} target="_blank" rel="noopener noreferrer">{children}</a>
        )
    }

    return (
        <ReactLink to={to} className={currentClassName}>{children}</ReactLink>
    );
};

export default Link;