import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Inner: Props = ({ children, className = "" }) => {
  return <div className={`${css.inner} ${className}`}>{children}</div>;
};

export default Inner;
