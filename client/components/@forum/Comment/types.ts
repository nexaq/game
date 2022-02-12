import { FC } from "react";

type OwnProps = {
  className?: string;
  author: string;
  date?: string;
  comment: string;
  buttons?: JSX.Element;
  avatar?: string;
};

export type Props = FC<OwnProps>;
