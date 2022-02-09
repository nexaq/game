import {OwnProps as MenuItem} from "./components/menu-item";
import {ROUTES} from "client/routes";

export default function getMenuConfig(isAuth: boolean) {
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
        (isAuth ?
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