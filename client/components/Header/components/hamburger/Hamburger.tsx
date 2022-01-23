import React from 'react';
import css from './style.module.pcss';
import {Props} from "./types";

const Hamburger: Props = ({className = '', active = false, onClick}) => {
    const activeClassName = active ? css._active : '';
    const cssClassName = `${activeClassName} ${css.hamburger} ${className}`;

    return (
        <button className={cssClassName} onClick={onClick} />
    );
};

export default Hamburger;