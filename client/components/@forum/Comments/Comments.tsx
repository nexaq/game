import Grid from "client/components/Grid";
import React from "react";

import { Props } from "./types";

const Comments: Props = ({ children }) => {
  return (
    <Grid cols={1} rowGap={32}>
      {children}
    </Grid>
  );
};

export default Comments;
