import React from 'react';
import {Props} from './types';
import css from './style.module.pcss';
import Link from "client/components/Link";

const MenuItem: Props = ({label, url, className = ''}) => {
    return (
        <li className={css.item}>
            <Link to={url} className={`${css.link} ${className}`}>
                <span className={css.number} />
                <span className={css.label}>{label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;