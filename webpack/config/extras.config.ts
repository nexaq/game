import flow from 'lodash.flow';
import webpack from "webpack";

import {
    initExtrasConfig,
    loadScripts,
    loadStyles
} from '../settings';

function getConfig(): webpack.Configuration {
    return flow([
        initExtrasConfig(),
        loadScripts({
            isSSR: false
        }),
        loadStyles({isSSR: false}),
    ])({});
}

export default getConfig();