import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const Label: Props = ({children}) => {
    return <span className={css.label}>{children}</span>;
};

export default Label;