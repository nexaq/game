import {TypedThunkAction} from "client/utils/infrastructure/store";
import {LeaderboardActionType, LeaderboardTopics} from "./types";
import {leaderboard, LeaderboardResults} from "client/api/leaderboard";

const createFetchLeadersAction = (payload: LeaderboardResults): LeaderboardTopics => {
    return { type: LeaderboardActionType.FETCH_ALL, payload }
}

export const fetchLeaderboard = (useRequestCallback?: <T>(request: () => Promise<T>) => Promise<T>): TypedThunkAction<LeaderboardActionType.FETCH_ALL> => async (dispatch) => {
    if (useRequestCallback) {
        useRequestCallback(() => leaderboard.get().then(({data}) => {
            dispatch(createFetchLeadersAction(data ?? []));
        }));
    } else {
        try {
            const {data} = await leaderboard.get();
            dispatch(createFetchLeadersAction(data ?? []));
        } catch (e) {
            alert('Error occurred! Try later');
        }
    }
}
