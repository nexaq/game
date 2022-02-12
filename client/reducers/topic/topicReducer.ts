import { TopicActionType, TopicState, UserAction } from "./types";

const initialState: TopicState = {
  topic: null,
};

export const topicReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: UserAction
): TopicState => {
  switch (action.type) {
    case TopicActionType.FETCH:
      return { ...state, topic: { ...action.payload } };
    default:
      return state;
  }
};
