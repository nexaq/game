import {UserAction, TopicActionType, TopicState} from "./types";

const initialState: TopicState = {
    topics: null
};

export const topicsReducer = (state = initialState, action: UserAction): TopicState => {
    switch (action.type) {
        case TopicActionType.FETCH_ALL:
            return {  ...state, topics: [...action.payload ] }
        default:
            return state
    }
}