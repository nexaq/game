import {FC} from "react";

export type OwnProps = {
    fakeLoading?: boolean,
    memoizeChildrenBy?: any[],
    headerOverlapsContent?: boolean,
    title?: string,
    mustBeAuthorized?: boolean

}

export type Props = FC<OwnProps>;