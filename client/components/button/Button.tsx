import React from 'react';
import {ButtonFC} from "./types";
import css from './style.module.pcss';
import Label from "./components/label";
import getStyleClassName from './helpers/getStyleClassName';

const Button: ButtonFC = ({children, style, type}) => {
    const styleClassName = getStyleClassName(style);

    return <button type={type} className={`${css.button} ${styleClassName}`}>
        <Label>{children}</Label>
    </button>;
};

export default Button;