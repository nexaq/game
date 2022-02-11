import React from 'react';
import css from './style.module.pcss';
import Loading from "../Loading";

const LoadingLoadable = () => {
    return (
        <div className={css.container}>
            <Loading active={true} />
        </div>
    );
};

export default LoadingLoadable;

