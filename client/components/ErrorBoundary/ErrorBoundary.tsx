import React, {Component, ErrorInfo} from "react";
import Error from "client/pages/Error";
import {Props, State} from "./types";

const {__PROD__} = process.env;

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <Error error={500} />;
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary;

