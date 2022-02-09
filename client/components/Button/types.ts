import {FC, MouseEventHandler} from "react";

type CommonProps = {
    style?: 'inversed' | 'link'
};

type LinkButtonProps = {
    url: string,
    className?: string,
} & CommonProps;

type ButtonProps = {
    type?: "button" | "submit" | "reset",
    onClick?: MouseEventHandler<HTMLButtonElement>
} & CommonProps

export type ButtonFC = FC<ButtonProps>;
export type LinkButtonFC = FC<LinkButtonProps>;