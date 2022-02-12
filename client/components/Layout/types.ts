import { FC } from "react";

export type OwnProps = {
  fakeLoading?: boolean;
  headerOverlapsContent?: boolean;
  title?: string;
  mustBeAuthorized?: boolean;
};

export type Props = FC<OwnProps>;
