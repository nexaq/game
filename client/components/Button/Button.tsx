import React from "react";

import Label from "./components/Label";
import getStyleClassName from "./helpers/getStyleClassName";
import css from "./style.module.pcss";
import { ButtonFC } from "./types";

const Button: ButtonFC = ({ children, style, type, onClick }) => {
  const styleClassName = getStyleClassName(style);

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${css.button} ${styleClassName}`}
    >
      <Label>{children}</Label>
    </button>
  );
};

export default Button;
