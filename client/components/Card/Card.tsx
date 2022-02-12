import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Card: Props = ({ children, className = "" }) => {
  return <div className={`${css.card} ${className}`}>{children}</div>;
};

export default Card;
