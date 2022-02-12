import { TopicActionType, TopicState, UserAction } from "./types";

const initialState: TopicState = {
  topics: null,
};

export const topicsReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: UserAction
): TopicState => {
  switch (action.type) {
    case TopicActionType.FETCH_ALL:
      return { ...state, topics: [...action.payload] };
    default:
      return state;
  }
};
