import React, {FC} from "react";

export type OwnProps = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    active?: boolean,
}

export type Props = FC<OwnProps>;