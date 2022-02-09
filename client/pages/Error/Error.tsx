import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const Error: Props = ({ error }) => {

    const messages = {
        404: 'page not found in current galaxy'
    }
    const errorMessage = messages[error];

    return (
        <div className={css.cover}>
            <div className={css.container}>
                <div className={css.code}>{error}</div>
                <div className={css.text}>
                    <div className={css.title}>ERROR</div>
                    <div className={css.message}>{errorMessage}</div>
                </div>
            </div>
        </div>
    );
};

export default Error;