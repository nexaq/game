import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import {Helmet} from "react-helmet";

const Error: Props = ({ error }) => {

    const messages = {
        404: 'page not found in current galaxy',
        500: 'Sorry.. there was an error',
    }
    const errorMessage = messages[error];

    return (
        <div className={css.cover}>
            <Helmet>
                <title>ERROR</title>
            </Helmet>
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