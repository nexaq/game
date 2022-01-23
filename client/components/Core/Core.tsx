import React from 'react';
import Wrapper from './components/Wrapper';
import {Props} from "./types";

const Core: Props = ({}) => {
    return __PROD__
        ? (
            <div>
                <Wrapper/>
            </div>
        )
        : <Wrapper/>;
};

const {__PROD__} = process.env;
export default Core;
