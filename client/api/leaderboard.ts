import { get } from "client/utils/api/api";

import { ApiPath } from "./consts";
import { UserDTO } from "./user";

export type ResultDTO = {
  id: number;
  score: number;
  user: UserDTO;
};

export type LeaderboardResults = ResultDTO[];

export const getLeaders = () =>
  get<LeaderboardResults>(ApiPath.GAME.LEADERBOARD.ALL, {
    refreshTokenOnFail: false,
  });

export const leaderboard = {
  get: getLeaders,
};
