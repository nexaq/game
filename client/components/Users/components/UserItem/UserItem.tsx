import Card from "client/components/Card";
import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const UserItem: Props = ({ number, name, extra, avatar }) => {
  return (
    <Card className={css.item}>
      <div className={css.id}>#{number}</div>
      <div className={css.avatar}>{avatar}</div>
      <div className={css.name}>{name}</div>
      <div className={css.extra}>{extra}</div>
    </Card>
  );
};

export default UserItem;
