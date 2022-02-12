import React from "react";
import { Link } from "react-router-dom";

import Label from "./components/Label";
import getStyleClassName from "./helpers/getStyleClassName";
import css from "./style.module.pcss";
import { LinkButtonFC } from "./types";

const LinkButton: LinkButtonFC = ({ children, url, style, className = "" }) => {
  const styleClassName = getStyleClassName(style);

  return (
    <Link to={url} className={`${css.button} ${styleClassName} ${className}`}>
      <Label>{children}</Label>
    </Link>
  );
};

export default LinkButton;
