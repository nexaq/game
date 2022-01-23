import React from 'react';
import {Props} from "./types";
import Card from "client/components/Card";
import css from './style.module.pcss';

const UserItem: Props = ({number, name, extra, avatar}) => {
    return <Card className={css.item}>
        <div className={css.id}>
            #{number}
        </div>
        <div className={css.avatar}>
            {avatar}
        </div>
        <div className={css.name}>
            {name}
        </div>
        <div className={css.extra}>
            {extra}
        </div>
    </Card>;
};

export default UserItem;