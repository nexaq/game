import React from 'react';
import {hydrate} from 'react-dom';
import DesktopBundle from "./Desktop";
import {BrowserRouter} from "react-router-dom";

export {DesktopBundle};

// todo: Change any to explicit type
export default (data: SSRData) => {
    hydrate(
        <BrowserRouter>
            <DesktopBundle data={data}/>
        </BrowserRouter>,
        document.getElementById('root'),
    );
};
