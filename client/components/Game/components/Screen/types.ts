import { FC, MouseEventHandler } from "react";

type OwnProps = {
  active: boolean;
  title?: string;
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type Props = FC<OwnProps>;
