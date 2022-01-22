import {FC} from "react";

export type OwnProps = {
    fakeLoading?: boolean,
    memoizeChildrenBy?: any[]
}

export type Props = FC<OwnProps>;