import useValueByBreakpoint, {
  makeConfig as c,
} from "client/hooks/useValueByBreakPoint";
import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Spacing: Props = ({ size, sizeSm, sizeMd, sizeLg, sizeXl }) => {
  const spacing = useValueByBreakpoint(c(size, sizeSm, sizeMd, sizeLg, sizeXl));

  return <div className={css[`spacing_${spacing}`]} />;
};

export default Spacing;
