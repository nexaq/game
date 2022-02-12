import React from "react";

import { ROUTES } from "../../routes";
import Link from "../Link";
import css from "./style.module.pcss";
import { colors, Props } from "./types";

const Logo: Props = ({ color }) => {
  const fontColor = colors[color];

  return (
    <Link to={ROUTES.HOME.INDEX}>
      <div
        className={css.logo}
        style={{
          color: fontColor,
        }}
      >
        WORLD <br />
        OF STARSHIPS
      </div>
    </Link>
  );
};

export default Logo;
