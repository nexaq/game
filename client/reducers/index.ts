import { leaderboardReducer } from "./leaderboard";
import { topicReducer } from "./topic";
import { topicsReducer } from "./topics";
import { userReducer } from "./user";

export const reducers = {
  login: userReducer,
  topics: topicsReducer,
  topic: topicReducer,
  leaderboard: leaderboardReducer,
};
