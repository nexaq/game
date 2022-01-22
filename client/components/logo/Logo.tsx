import React from 'react';
import css from './style.module.pcss';
import {Props, colors} from "./types";
import Link from "../link";
import {ROUTES} from "../../routes";

const Logo: Props = ({ color }) => {
    const fontColor = colors[color];

    return (
        <Link to={ROUTES.HOME.INDEX}>
            <div className={css.logo} style={{
                color: fontColor
            }}>
                WORLD <br/>OF STARSHIPS
            </div>
        </Link>
    );
};

export default Logo;