import { TopicDTO } from "client/api/forum";

export interface TopicState {
  topics: TopicDTO[] | null;
}

export enum TopicActionType {
  FETCH_ALL = "TOPIC_FETCH_ALL",
}

export interface FetchTopics {
  type: TopicActionType.FETCH_ALL;
  payload: TopicDTO[];
}

export type UserAction = FetchTopics;
