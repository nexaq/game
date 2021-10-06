import flow from 'lodash.flow';
import {join} from 'path';
import webpack from 'webpack';

import {ROOT_DIR_FROM_WEBPACK} from '../assets/dir';
import {
    initServerConfig,
    loadAssets,
    loadScripts,
    loadStyles,
} from '../settings';

function getConfig(): webpack.Configuration {
    return flow([
        initServerConfig({
            entry: {
                app: join(ROOT_DIR_FROM_WEBPACK, 'client', 'bundles', 'index.ts'),
            }
        }),
        loadScripts({isSSR: true}),
        loadStyles({isSSR: true}),
        loadAssets(),
    ])({});
}

export default getConfig;
