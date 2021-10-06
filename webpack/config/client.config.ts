import flow from 'lodash.flow';
import webpack from "webpack";

import {
    initClientConfig,
    loadScripts,
    loadAssets,
    loadStyles
} from '../settings';

function getConfig(): webpack.Configuration {
    return flow([
        initClientConfig(),
        loadScripts({
            isSSR: false
        }),
        loadStyles({isSSR: false}),
        loadAssets()
    ])({});
}

export default getConfig();