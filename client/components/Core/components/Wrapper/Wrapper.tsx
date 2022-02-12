import Router from "client/components/Router";
import React from "react";
import { Helmet } from "react-helmet";

const Wrapper = () => {
  return (
    <>
      <Helmet>
        <title>Hello</title>
        <meta name="title" content="ssr" />
      </Helmet>
      <Router />
    </>
  );
};
export default Wrapper;
