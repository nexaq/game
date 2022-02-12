import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Container: Props = ({ children, className = "" }) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

export default Container;
