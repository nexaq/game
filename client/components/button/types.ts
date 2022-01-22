import {FC} from "react";

type CommonProps = {
    style?: 'inversed'
};

type LinkButtonProps = {
    url: string,
} & CommonProps;

export type Props = FC<LinkButtonProps>;