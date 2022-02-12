import useIsAuth from "client/hooks/useIsAuth/useIsAuth";
import React from "react";
import { v4 as id } from "uuid";

import MenuItem from "./components/menu-item";
import getMenuConfig from "./config";
import css from "./style.module.pcss";
import { Props } from "./types";

const Menu: Props = ({ active = true }) => {
  const isAuth = useIsAuth();

  return (
    <ul className={`${css.menu} ${active ? css._opened : ""}`}>
      {getMenuConfig(isAuth).map((props) => (
        <MenuItem {...props} key={id()} className={`${css.item} ${css.item}`} />
      ))}
    </ul>
  );
};

export default Menu;
