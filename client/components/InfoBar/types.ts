import { FC } from "react";

type Item = string | JSX.Element;

type OwnProps = {
  items: Item[];
  className?: string;
};

export type Props = FC<OwnProps>;
