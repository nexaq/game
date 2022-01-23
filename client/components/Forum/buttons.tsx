import React, {FC} from "react";
import css from './buttons.module.pcss';

export const ReplyButton: FC = () => {
    return <button className={`${css.button} ${css._reply}`}>Reply</button>
}

export const AnswersButton: FC<{count: number}> = ({count}) => {
    return <button className={`${css.button}`}>{count} answers</button>
}

export const ViewAnswersButton: FC = () => {
    return <button className={`${css.button}`}>View answers</button>
}

export const SendButton: FC = () => {
    return <button className={`${css.button} ${css._send}`}>SEND</button>
}

export const ButtonsContainer: FC = ({children}) => {
    return <div className={css.buttons}>
        {children}
    </div>;
};