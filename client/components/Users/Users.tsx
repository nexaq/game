import React from "react";

import Grid from "../Grid";
import UserItem from "./components/UserItem";
import { Props } from "./types";

const Users: Props = ({ items }) => {
  return (
    <Grid cols={1} rowGap={12}>
      {items.map((leader, index) => {
        return (
          <UserItem
            key={leader.key}
            name={leader.name}
            extra={leader.extra}
            number={index + 1}
            avatar={leader.avatar}
          />
        );
      })}
    </Grid>
  );
};

export default Users;
