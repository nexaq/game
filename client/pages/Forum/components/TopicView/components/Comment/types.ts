import { FC } from "react";

type OwnProps = {
  id: number;
  topicId: number;
  author: string;
  comment: string;
  date: string;
  avatar?: string;
};

export type Props = FC<OwnProps>;
