import React from 'react';
import {LinkButtonFC} from "./types";
import {Link} from "react-router-dom";
import css from './style.module.pcss';
import Label from "./components/Label";
import getStyleClassName from "./helpers/getStyleClassName";

const LinkButton: LinkButtonFC = ({children, url, style}) => {
    const styleClassName = getStyleClassName(style);

    return <Link to={url} className={`${css.button} ${styleClassName}`}>
        <Label>{children}</Label>
    </Link>;
};

export default LinkButton;