import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Heading: Props = ({
  level,
  children,
  className = "",
  addLine = false,
  uppercase = false,
}) => {
  const uppercaseClassName = uppercase ? css._uppercase : "";

  return (
    <>
      {React.createElement(
        level,
        {
          className: `${css.heading} ${className} ${uppercaseClassName}`,
        },
        <>
          {children}
          {addLine && <div className={css.line} />}
        </>
      )}
    </>
  );
};

export default Heading;
