import React, {FC} from 'react';
import Layout from './components/wrapper';

const Core: FC = () => {

    return __PROD__
        ? (
            <div>
                <Layout/>
            </div>
)
: <Layout/>;
};

const {__PROD__} = process.env;
export default Core;
