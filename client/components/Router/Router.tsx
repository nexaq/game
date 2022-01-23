import React from 'react';
import {Routes} from 'react-router-dom';

import Home from 'client/pages/Home';
import Leaderboard from 'client/pages/Leaderboard';
import {Route} from "react-router-dom";
import {ROUTES} from "client/routes";
import Forum from "client/pages/Forum";
import Profile from "client/pages/Profile";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME.INDEX} element={<Home />} />
            <Route path={ROUTES.LEADERBOARD.INDEX} element={<Leaderboard />} />
            <Route path={ROUTES.FORUM.INDEX} element={<Forum />} />
            <Route path={ROUTES.PROFILE.INDEX} element={<Profile />} />
        </Routes>
    );
};
export default Router;
