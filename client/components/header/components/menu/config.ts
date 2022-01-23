import {OwnProps as MenuItem} from "./components/menu-item";
import {ROUTES} from "../../../../routes";

export const menuConfig: MenuItem[] = [
    {
        label: 'Play',
        url: '/test',
    },
    {
        label: 'Forum',
        url: ROUTES.FORUM.INDEX,
    },
    {
        label: 'Leaderboard',
        url: ROUTES.LEADERBOARD.INDEX,
    },
    {
        label: 'Profile',
        url: '/test',
    },
];