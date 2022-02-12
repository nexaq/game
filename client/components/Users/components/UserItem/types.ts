import { FC } from "react";

type OwnProps = {
  number: number;
  name: string;
  avatar: JSX.Element;
  extra: string;
};

export type Props = FC<OwnProps>;
