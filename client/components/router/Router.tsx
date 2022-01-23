import React from 'react';
import {Routes} from 'react-router-dom';

import Home from 'client/pages/home';
import Leaderboard from 'client/pages/leaderboard';
import {Route} from "react-router-dom";
import {ROUTES} from "client/routes";
import Forum from "../../pages/forum";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME.INDEX} element={<Home />} />
            <Route path={ROUTES.LEADERBOARD.INDEX} element={<Leaderboard />} />
            <Route path={ROUTES.FORUM.INDEX} element={<Forum />} />
        </Routes>
    );
};
export default Router;
