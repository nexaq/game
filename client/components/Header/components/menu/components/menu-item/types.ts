import { FC } from "react";

export type OwnProps = {
  label: string;
  url: string;
  className?: string;
};

export type Props = FC<OwnProps>;
