import {FC} from "react";

type OwnProps = {
    title: string,
    date?: string,
    className?: string,
    url?: string,
    author: string,
    buttons?: JSX.Element,
};

export type Props = FC<OwnProps>;