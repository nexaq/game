import {LeaderboardAction, LeaderboardActionType, LeaderboardState} from "./types";

const initialState: LeaderboardState = {
    leaders: null
};

export const leaderboardReducer = (state = initialState, action: LeaderboardAction): LeaderboardState => {
    switch (action.type) {
        case LeaderboardActionType.FETCH_ALL:
            return { ...state, leaders: [...action.payload ] }
        default:
            return state
    }
}