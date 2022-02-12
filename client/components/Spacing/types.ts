import { FC } from "react";

export type Sizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type OwnProps = {
  size: Sizes;
  sizeSm?: Sizes;
  sizeMd?: Sizes;
  sizeLg?: Sizes;
  sizeXl?: Sizes;
};

export type Props = FC<OwnProps>;
