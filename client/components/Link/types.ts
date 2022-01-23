import {FC} from "react";

export type OwnProps = {
    to: string,
    className?: string,
    external?: boolean
};

export type Props = FC<OwnProps>;