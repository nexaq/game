import React, {FC} from 'react';

import ErrorBoundary from 'client/components/error-boundry';

import Wrapper from './components/wrapper';

const {__PROD__} = process.env;

const Page: FC = () => {
    return __PROD__
        ? (<ErrorBoundary>
            <Wrapper/>
        </ErrorBoundary>)
        : <Wrapper/>;
};
export default Page;
