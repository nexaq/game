import { FC } from "react";

type OwnProps = {
  title: string;
  date?: string;
  className?: string;
  url?: string;
  author: string;
  avatar?: string;
};

export type Props = FC<OwnProps>;
