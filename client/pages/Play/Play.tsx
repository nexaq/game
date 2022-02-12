import Container from "client/components/Container";
import Layout from "client/components/Layout";
import React from "react";
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";

import { Props } from "./types";

const X = () => <div>loading</div>;

const LoadableGame = Loadable({
  loader: () => import("client/components/Game"),
  loading: X,
});

const Play: Props = () => {
  return (
    <>
      <Helmet>
        <title>PLAY</title>
      </Helmet>

      <Layout title="Play" mustBeAuthorized>
        <Container>
          <LoadableGame />
        </Container>
      </Layout>
    </>
  );
};

export default Play;
