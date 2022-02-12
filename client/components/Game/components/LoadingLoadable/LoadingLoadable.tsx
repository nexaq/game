import React from "react";

import Loading from "../Loading";
import css from "./style.module.pcss";

const LoadingLoadable = () => {
  return (
    <div className={css.container}>
      <Loading active />
    </div>
  );
};

export default LoadingLoadable;
