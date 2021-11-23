import React from 'react';
import {Helmet} from 'react-helmet';

import Router from 'client/components/router';

const Wrapper = () => {
    return (
        <>
            <Helmet>
                <title>Hello</title>
                <meta name="title" content="ssr"/>
            </Helmet>
            <Router/>
        </>
    );
};
export default Wrapper;
