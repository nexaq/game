import React from 'react';
import {Routes} from 'react-router-dom';

import Home from 'client/pages/home';
import {Route} from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
        </Routes>
    );
};
export default Router;
