import { FC } from "react";

export type OwnProps = {
  level: "h1" | "h2" | "h3";
  addLine?: boolean;
  className?: string;
  uppercase?: boolean;
};

export type Props = FC<OwnProps>;
