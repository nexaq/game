import React from 'react';
import {Routes} from 'react-router-dom';

import Home from 'client/pages/home';
import {Route} from "react-router-dom";
import {ROUTES} from "client/routes";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME.INDEX} element={<Home />} />
        </Routes>
    );
};
export default Router;
