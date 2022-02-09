import {LeaderboardResults} from "../../api/leaderboard";

export interface LeaderboardState {
    leaders: LeaderboardResults | null;
}

export enum LeaderboardActionType {
    FETCH_ALL = 'LEADERBOARD_FETCH_ALL'
}

export interface LeaderboardTopics {
    type: LeaderboardActionType.FETCH_ALL,
    payload: LeaderboardResults
}


export type LeaderboardAction = LeaderboardTopics;
