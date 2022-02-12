import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Text: Props = ({ children, className = "" }) => {
  return <div className={`${css.commentText} ${className}`}>{children}</div>;
};

export default Text;
