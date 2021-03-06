import useValueByBreakpoint, {
  makeConfig as c,
} from "client/hooks/useValueByBreakPoint";
import React from "react";
import { rem } from "styles/functions";

import css from "./style.module.pcss";
import { Props } from "./types";

const Grid: Props = ({
  cols,
  children,
  colGap = 10,
  rowGap,
  className = "",
  ...props
}) => {
  if (rowGap === undefined) {
    // eslint-disable-next-line no-param-reassign
    rowGap = colGap;
  }

  const getFractionsStyle = (cols: number) => `repeat(${cols}, 1fr)`;

  const currentColCount = useValueByBreakpoint(
    c(cols, props.colsSm, props.colsMd, props.colsLg, props.colsXl)
  );
  const currentColGapSize = useValueByBreakpoint(
    c(colGap, props.colGapSm, props.colGapMd, props.colGapLg, props.colGapXl)
  );
  const currentRowGapSize = useValueByBreakpoint(
    c(rowGap, props.rowGapSm, props.rowGapMd, props.rowGapLg, props.rowGapXl)
  );

  return (
    <div
      className={`${css.grid} ${className}`}
      style={{
        gridTemplateColumns: getFractionsStyle(currentColCount),
        gridColumnGap: rem(currentColGapSize),
        gridRowGap: rem(currentRowGapSize),
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
