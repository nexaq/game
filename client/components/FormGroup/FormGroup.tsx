import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';

const FormGroup: Props = ({children}) => {
    return <div className={css.formGroup}>
        {children}
    </div>
};

export default FormGroup;