import Forum from "client/pages/Forum";
import Home from "client/pages/Home";
import Leaderboard from "client/pages/Leaderboard";
import Profile from "client/pages/Profile";
import { GLOBAL_ROUTES, ROUTES } from "client/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Error from "../../pages/Error";
import Play from "../../pages/Play";
import SignIn from "../../pages/SingIn";
import SignUp from "../../pages/SingIn/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.INDEX} element={<Home />} />
      <Route path={ROUTES.LEADERBOARD.INDEX} element={<Leaderboard />} />
      <Route path={ROUTES.FORUM.INDEX} element={<Forum />} />
      <Route path={ROUTES.FORUM.VIEW} element={<Forum />} />
      <Route path={ROUTES.PROFILE.INDEX} element={<Profile />} />
      <Route path={ROUTES.PLAY.INDEX} element={<Play />} />
      <Route path={ROUTES.SIGN_IN.INDEX} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP.INDEX} element={<SignUp />} />
      <Route path={GLOBAL_ROUTES.NOT_FOUND} element={<Error error={404} />} />
    </Routes>
  );
};
export default Router;
