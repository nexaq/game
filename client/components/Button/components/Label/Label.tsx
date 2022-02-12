import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Label: Props = ({ children }) => {
  return <span className={css.label}>{children}</span>;
};

export default Label;
