import React from 'react';
import {ButtonFC} from "./types";
import css from './style.module.pcss';
import Label from "./components/Label";
import getStyleClassName from './helpers/getStyleClassName';

const Button: ButtonFC = ({children, style, type, onClick}) => {
    const styleClassName = getStyleClassName(style);

    return <button onClick={onClick} type={type} className={`${css.button} ${styleClassName}`}>
        <Label>{children}</Label>
    </button>;
};

export default Button;