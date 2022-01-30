import {OwnProps as MenuItem} from "./components/menu-item";
import {ROUTES} from "client/routes";
import isAuth from "client/helpers/isAuth";

export default function getMenuConfig() {
    const isUserAuth = isAuth();

    const menuConfig: MenuItem[] = [
        {
            label: 'Play',
            url: ROUTES.PLAY.INDEX,
        },
        {
            label: 'Forum',
            url: ROUTES.FORUM.INDEX,
        },
        {
            label: 'Leaderboard',
            url: ROUTES.LEADERBOARD.INDEX,
        },
        (isUserAuth ?
            {
                label: 'Profile',
                url: ROUTES.PROFILE.INDEX,
            } :
            {
                label: 'Sign in',
                url: ROUTES.SIGN_IN.INDEX,
            }),
    ];
    return menuConfig;
}