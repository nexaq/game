import {Router, static as staticRoute} from 'express';
import cfg from 'lib/cfg';
import {renderApp} from "../controllers";
import {ALL_OTHER} from "../../client/routes";

export const staticRoutes = (router: Router) => {
    router
        .use('/', staticRoute(cfg.static.staticDir))
        .use('/static', staticRoute(cfg.static.dir))
        .use('/fonts', staticRoute('dist/fonts'))
        .use('/favicons', staticRoute('dist/favicons'))
        .use('/robots.txt', staticRoute('dist/robots.txt'))
        .use(ALL_OTHER.INDEX, renderApp)
    ;
};
