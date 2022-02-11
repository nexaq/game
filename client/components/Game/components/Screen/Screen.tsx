import React, {useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Button from "../../../Button/Button";

const Screen: Props = ({title, buttonText, onClick, active}) => {
    return <>
        {active && <div className={css.screen}>
            <div>
                {title && <div className={css.alertTitle}>{title}</div>}
                <Button onClick={onClick}>{buttonText}</Button>
            </div>
        </div>}
    </>
};

export default Screen;