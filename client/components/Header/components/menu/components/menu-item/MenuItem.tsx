import Link from "client/components/Link";
import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const MenuItem: Props = ({ label, url, className = "" }) => {
  return (
    <li className={css.item}>
      <Link to={url} className={`${css.link} ${className}`}>
        <span className={css.number} />
        <span className={css.label}>{label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
