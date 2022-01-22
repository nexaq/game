import {FC} from "react";

type OwnProps = {
    colsXl?: number,
    colsLg?: number,
    colsMd?: number,
    colsSm?: number,
    cols: number,
    colGapXl?: number,
    colGapLg?: number,
    colGapMd?: number,
    colGapSm?: number,
    colGap?: number,
    rowGapXl?: number,
    rowGapLg?: number,
    rowGapMd?: number,
    rowGapSm?: number,
    rowGap?: number,
    className?: string,
};

export type Props = FC<OwnProps>;