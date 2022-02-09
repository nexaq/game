import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Avatar from "client/components/Avatar";
import InfoBar from "../../InfoBar";
import utils from 'styles/utils.module.pcss';
import Link from "client/components/Link";

let NormalHeader: Props = ({ title, author, className = '', url, date, avatar }) => {
    return (
        <div className={`${css.header} ${className}`}>
            <div>
                <Avatar src={avatar} />
            </div>
            <div className={css.text}>
                {url && <Link to={url} className={css.title}>{title}</Link>}
                {!url && <div className={css.title}>{title}</div>}
                <InfoBar items={[
                    <span className={utils.textPrimary}>{author}</span>,
                    ...(date ? [date] : [])
                ]} />
            </div>
        </div>
    );
};

export default NormalHeader;
