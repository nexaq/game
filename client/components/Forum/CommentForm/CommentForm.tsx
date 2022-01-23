import React from 'react';
import {Props} from "./types";
import Card from "../../Card";
import {SendButton} from "../buttons";
import css from './style.module.pcss';

const CommentForm: Props = () => {

    return (
        <Card className={css.form}>
            <input placeholder = "Comment..." className={css.input} />
            <SendButton />
        </Card>
    );
};

export default CommentForm;
