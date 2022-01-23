import {FC} from "react";

type OwnProps = {
    title?: string,
    active: boolean,
    className?: string,
    handleClose: () => void
};

export type Props = FC<OwnProps>;

