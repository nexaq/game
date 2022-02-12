import ErrorBoundary from "client/components/ErrorBoundary";
import React from "react";

import Wrapper from "./components/Wrapper";
import { Props } from "./types";

const { __PROD__ } = process.env;

const Core: Props = () => {
  return __PROD__ ? (
    <div>
      <ErrorBoundary>
        <Wrapper />
      </ErrorBoundary>
    </div>
  ) : (
    // <StrictMode>
    <Wrapper />
    // </StrictMode>
  );
};

export default Core;
