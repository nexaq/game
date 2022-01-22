import React from 'react';
import {Props} from "./types";
import {Link} from "react-router-dom";
import css from './style.module.pcss';
import Label from "./components/label";

const LinkButton: Props = ({children, url, style}) => {
    const modClassName = style ? css[`_${style}`] : '';

    return <Link to={url} className={`${css.button} ${modClassName}`}>
        <Label>{children}</Label>
    </Link>;
};

export default LinkButton;