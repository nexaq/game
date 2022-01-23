import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import image from './tonald.png';

const Avatar: Props = () => {
    return <div className={css.avatar}>
        <img src={image} alt="" className={css.image}/>
    </div>
};

export default Avatar;