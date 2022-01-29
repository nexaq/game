import {Express} from 'express';
import Loadable from 'react-loadable';

interface Options {
    server: Express;
}

const {PORT_SSR : PORT = 3000} = process.env;

export function startApp({server}: Options) {
    Loadable.preloadAll().then(() => {
        server.listen(PORT, () => {
            // eslint-disable-next-line
            console.log(`App on http://localhost:${PORT}`);
        });
    });
}
