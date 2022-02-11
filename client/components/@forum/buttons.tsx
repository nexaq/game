import React, {FC, MouseEventHandler} from "react";
import css from './buttons.module.pcss';

export const ReplyButton: FC<{
    onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({onClick}) => {
    return <button className={`${css.button} ${css._reply}`} onClick={onClick}>Reply</button>
}

export const AnswersButton: FC<{count?: number}> = ({count}) => {
    return <button className={`${css.button}`}>{count} Answers</button>
}

export const ViewAnswersButton: FC<{
    onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({ onClick }) => {
    return <button className={`${css.button}`} onClick={onClick}>View answers</button>
}

export const SendButton: FC = () => {
    return <button type={"submit"} className={`${css.button} ${css._send}`}>SEND</button>
}

export const ButtonsContainer: FC = ({children}) => {
    return <div className={css.buttons}>
        {children}
    </div>;
};