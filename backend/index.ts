import server from './app';
import {startApp} from './utils/startApp';
import {startDb} from './utils/startDb';

startApp({
    server,
    startDb
}).catch((e) => {
    console.error(e);
});


