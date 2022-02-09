import {FC} from "react";

type OwnProps =  {
    className?: string
    displayValue: string
    placeholder: string
    onClick: () => void
};

export type Props = FC<OwnProps>;