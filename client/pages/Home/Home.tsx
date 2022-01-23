import React from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/layout";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Separator from "client/components/separator/Separator";
import Container from "client/components/container";
import AvailableSection from "./components/AvailableSection/AvailableSection";
import Spacing from "client/components/spacing";
import LetsPlaySection from "./components/LetsPlaySection";

let Home: Props = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Layout fakeLoading={true} headerOverlapsContent={true} memoizeChildrenBy={[]}>
                <MainSection/>
                <AboutSection/>
                <div>
                    <Container>
                        <Spacing size={'xl'} />
                        <Separator/>
                        <Spacing size={'xl'} />
                    </Container>
                </div>
                <AvailableSection/>
                <Spacing size={'lg'} />
                <Spacing size={'lg'} sizeSm={'xl'} sizeMd={'xxl'} />
                <LetsPlaySection />
                <Spacing size={'xs'}  sizeMd={'xl'} />
            </Layout>
        </>
    );
};

export default Home;