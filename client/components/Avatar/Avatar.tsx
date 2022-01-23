import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import image from './tonald.png';

const Avatar: Props = ({size = 'sm'}) => {
    return <div className={`${css.avatar} ${css[`_${size}`]}`}>
        <img src={image} alt="" className={css.image}/>
    </div>
};

export default Avatar;