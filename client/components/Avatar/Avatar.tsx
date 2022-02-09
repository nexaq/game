import React, {useEffect, useState} from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import image from './assets/user-profile.png';
import useLoading from "../../hooks/useLoading";

const Avatar: Props = ({size = 'sm', src}) => {

    const [isLoading, setLoading] = useLoading();

    const enableLoading = () => setLoading(true);
    const disableLoading = () => setLoading(false);

    useEffect(enableLoading, []);

    useEffect(enableLoading, [src])

    return <div className={`${css.avatar} ${css[`_${size}`]}`}>
        {isLoading && <div className={css.loading}>Loading...</div>}
        {src && <img src={src} alt="" className={css.image} onLoad={disableLoading} />}
        {!src && <img src={image} alt="" className={css.image} onLoad={disableLoading} />}
    </div>
};

export default Avatar;