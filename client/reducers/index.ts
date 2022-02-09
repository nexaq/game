import {userReducer} from "./user";
import {topicsReducer} from "./topics";
import {topicReducer} from "./topic";
import {leaderboardReducer} from "./leaderboard";


export const reducers = {
    login: userReducer,
    topics: topicsReducer,
    topic: topicReducer,
    leaderboard: leaderboardReducer,
};
