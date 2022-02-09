import {UserAction, TopicActionType, TopicState} from "./types";

const initialState: TopicState = {
    topic: null
};

export const topicReducer = (state = initialState, action: UserAction): TopicState => {
    switch (action.type) {
        case TopicActionType.FETCH:
            return { ...state, topic: {...action.payload } }
        default:
            return state
    }
}