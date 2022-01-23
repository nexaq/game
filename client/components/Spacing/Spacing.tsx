import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import useValueByBreakpoint, {makeConfig as c} from "../../hooks/useValueByBreakPoint";

const Spacing: Props = ({ size, sizeSm, sizeMd, sizeLg, sizeXl }) => {
    const spacing = useValueByBreakpoint(c(size, sizeSm, sizeMd, sizeLg, sizeXl));

    return <div className={css[`spacing_${spacing}`]}/>;
};

export default Spacing;