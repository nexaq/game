import {FC, FormEventHandler} from "react";

export type FormState = 'loading' | 'success' | 'normal';

type OwnProps = {
    action?: string
    className?: string
    state?: FormState
    successMessage?: string | JSX.Element
    onSubmit?: FormEventHandler<HTMLFormElement>
};

export type Props = FC<OwnProps>;