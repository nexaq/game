import React, {FC} from "react";


export type OwnProps = {
    size?: 'sm' | 'lg',
    style?: React.CSSProperties,
    className?: string,
};

export type Props = FC<OwnProps>;