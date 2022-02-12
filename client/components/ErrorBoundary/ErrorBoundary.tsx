import Error from "client/pages/Error";
import React, { Component, ErrorInfo } from "react";

import { Props, State } from "./types";

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { state, props } = this;

    if (state.hasError) {
      return <Error error={500} />;
    }
    return props.children;
  }
}

export default ErrorBoundary;
