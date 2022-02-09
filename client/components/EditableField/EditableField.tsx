import React from 'react';
import css from './style.module.pcss';
import {Props} from "./types";
import Card from "../Card";

const EditableField: Props = ({ displayValue, placeholder, onClick}) => {

    return (
        <>
            <Card>
                <div className={css.inner} onClick={onClick}>
                    <div>
                        <div className={css.name}>{placeholder}</div>
                        <div className={css.value}>{displayValue}</div>
                    </div>
                    <div className={css.extra}>edit</div>
                </div>
            </Card>
        </>
    );
};

export default EditableField;