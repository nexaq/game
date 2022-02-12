import "styles/boot.ts";

import React from "react";
import { Helmet } from "react-helmet";

import Core from "../../components/Core";
import { Props } from "./types";

// Входной компонеет должен быть экспортировам из отдельного модуля
// Иначе не работает fast-refresh!!!
const DesktopBundle: Props = ({ data }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Helmet>
      <Core {...data} />
    </>
  );
};

export default DesktopBundle;
