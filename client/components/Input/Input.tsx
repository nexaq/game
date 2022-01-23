import React, {FocusEvent, useEffect, useState} from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import useInput from "client/hooks/useInput/useInput";
import useHideLabel from "client/hooks/useInput/hooks/useHideLabel";

const Input: Props = () => {
    const value = useInput('');
    const [isFocused, setFocused] = useState(false);

    const [shouldHideLabel, setHideLabel] = useHideLabel(value.value);

    const hideLabelClassName = shouldHideLabel ? css.label_hide : '';
    const borderActiveClassName = isFocused ? css.border_active : '';

    return <div className={css.wrapper}>
        <div className={css.inputGroup}>
            <div className={`${css.label} ${hideLabelClassName}`}>test</div>
            <input
                type="text" className={css.input}
                onKeyDown={(e) => setHideLabel(e.currentTarget.value)}
                onKeyUp={(e) => setHideLabel(e.currentTarget.value)} {...value}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <div className={`${css.border} ${borderActiveClassName}`}/>
        </div>
    </div>;
};

export default Input;