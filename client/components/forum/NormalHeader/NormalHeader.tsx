import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Avatar from "client/components/avatar";
import InfoBar from "../../InfoBar";
import utils from 'styles/utils.module.pcss';

let NormalHeader: Props = ({ className = '' }) => {
    return (
        <div className={`${css.header} ${className}`}>
            <div>
                <Avatar />
            </div>
            <div className={css.text}>
                <div className={css.title}>How to build some walls?</div>
                <InfoBar items={[
                    <span className={utils.textPrimary}>Tonald J Drump</span>,
                    '21.11.2021'
                ]} />
            </div>
        </div>
    );
};

export default NormalHeader;
