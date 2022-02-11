import React, {StrictMode} from 'react';
import Wrapper from './components/Wrapper';
import {Props} from "./types";
import ErrorBoundary from "client/components/ErrorBoundary";

const Core: Props = () => {
    return __PROD__
        ? (
            <div>
                <ErrorBoundary>
                    <Wrapper/>
                </ErrorBoundary>
            </div>
        ) : (
            <StrictMode>
                <Wrapper/>
            </StrictMode>
        )
};

const {__PROD__} = process.env;
export default Core;
