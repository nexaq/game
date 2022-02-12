import { BrowserHistory } from "history";
import React from "react";
import { Router } from "react-router";
import { BrowserRouterProps } from "react-router-dom";

import isServer from "../../utils/serverSide/isServer";
import history from "./history";

/**
 * Без хука useNavigate не возможно вызвать другие страницы в React Router v6
 * для этого вынес history и могу использовать вне компонента
 */
export default function CustomBrowserRouter({
  basename,
  children,
}: BrowserRouterProps): JSX.Element {
  if (isServer) {
    return children as JSX.Element;
  }

  const historyRef = React.useRef<BrowserHistory>();
  if (historyRef.current == null) {
    historyRef.current = history;
  }

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
