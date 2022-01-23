import {FC} from "react";
import {OwnProps as ItemProps} from "../ArticleItem";

type ArticleItem = ItemProps & {description: string}

type OwnProps = {
    children: ArticleItem[];
    className?: string;
}

export type Props = FC<OwnProps>;