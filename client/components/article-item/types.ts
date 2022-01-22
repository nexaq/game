import React, {FC} from "react";

export type OwnProps = {
    name: string;
    title: string;
    className?: string;
    imageSource: React.ImgHTMLAttributes<HTMLImageElement>['src'];
}

export type Props = FC<OwnProps>;