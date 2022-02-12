import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Loading: Props = ({ active }) => {
  return (
    <>
      {active && (
        <div className={css.loading}>
          <div>Loading...</div>
        </div>
      )}
    </>
  );
};

export default Loading;
