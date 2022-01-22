import {FC} from "react";
import cssVariables from 'client/styles/variables.module.pcss';

export const colors = {
    primary: cssVariables.primary,
    secondary: cssVariables.secondary
};

export type OwnProps = {
    color: keyof typeof colors
};

export type Props = FC<OwnProps>;