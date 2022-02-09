import React from 'react';
import css from './style.module.pcss';
import {Props} from "./types";

const Form: Props = ({ action, state = 'normal', successMessage = 'Success', onSubmit, children }) => {
    const showSuccess = state === 'success';
    const showLoading = state === 'loading';
    const showForms = state === 'normal' || showLoading;

    return (
        <form action={action} className={css.form} onSubmit={onSubmit}>
            <div className={css.inner}>
                {showSuccess && <div className={css.success}>{successMessage}</div>}
                {showLoading && <div className={css.loading}>Loading...</div>}
                {showForms && (
                    <div className={css.forms}>
                        {children}
                    </div>
                )}
            </div>
        </form>
    );
};

export default Form;