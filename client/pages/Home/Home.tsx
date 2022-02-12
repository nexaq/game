import Container from "client/components/Container";
import Layout from "client/components/Layout";
import Separator from "client/components/Separator/Separator";
import Spacing from "client/components/Spacing";
import React from "react";
import { Helmet } from "react-helmet";

import AboutSection from "./components/AboutSection/AboutSection";
import AvailableSection from "./components/AvailableSection/AvailableSection";
import LetsPlaySection from "./components/LetsPlaySection";
import MainSection from "./components/MainSection";
import { Props } from "./types";

const Home: Props = () => {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <Layout fakeLoading headerOverlapsContent>
        <MainSection />
        <AboutSection />
        <div>
          <Container>
            <Spacing size="xl" />
            <Separator />
            <Spacing size="xl" />
          </Container>
        </div>
        <AvailableSection />
        <Spacing size="lg" />
        <Spacing size="lg" sizeSm="xl" sizeMd="xxl" />
        <LetsPlaySection />
        <Spacing size="xs" sizeMd="xl" />
      </Layout>
    </>
  );
};

export default Home;
