import React from 'react';
import {hydrate} from 'react-dom';
import DesktopBundle from "./Desktop";
import {Provider} from "react-redux";
import store from 'client/utils/infrastructure/store';
import CustomBrowserRouter from 'client/components/CustomBrowserRouter';

export {DesktopBundle};

// todo: Change any to explicit type
export default (data: SSRData) => {
    hydrate(
        <Provider store={store}>
            <CustomBrowserRouter>
                <DesktopBundle data={data}/>
            </CustomBrowserRouter>
        </Provider>,
        document.getElementById('root'),
    );
};
