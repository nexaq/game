import React from "react";
import {BrowserRouterProps} from "react-router-dom";
import {
    BrowserHistory
} from 'history';
import {Router} from "react-router";
import isServer from "../../utils/serverSide/isServer";
import history from "./history";

export default function CustomBrowserRouter({
                                  basename,
                                  children
                              }: BrowserRouterProps) {

    if (isServer) {
        return <>{children}</>;
    }

    let historyRef = React.useRef<BrowserHistory>();
    if (historyRef.current == null) {
        historyRef.current = history;
    }

    let [state, setState] = React.useState({
        action: history.action,
        location: history.location
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
}