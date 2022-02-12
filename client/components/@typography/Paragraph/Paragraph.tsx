import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Paragraph: Props = ({
  size = "lg",
  children,
  style = {},
  className = "",
}) => {
  const sizeClassName = css[`paragraph_${size}`];

  return (
    <p
      className={`${css.paragraph} ${sizeClassName} ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};

export default Paragraph;
