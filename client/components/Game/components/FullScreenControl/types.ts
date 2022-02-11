import {FC, MouseEventHandler, RefObject} from "react";

type OwnProps = {
    containerRef: RefObject<HTMLDivElement>;
}

export type Props = FC<OwnProps>;