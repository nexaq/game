import {FC} from "react";

type CommonProps = {
    style?: 'inversed'
};

type LinkButtonProps = {
    url: string,
} & CommonProps;

type ButtonProps = {
    type?: "button" | "submit" | "reset",
} & CommonProps

export type ButtonFC = FC<ButtonProps>;
export type LinkButtonFC = FC<LinkButtonProps>;