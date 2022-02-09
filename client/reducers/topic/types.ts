import {TopicDTO} from "client/api/forum";

export interface TopicState {
    topic: TopicDTO | null;
}

export enum TopicActionType {
    FETCH = 'FETCH'
}

export interface FetchTopic {
    type: TopicActionType.FETCH,
    payload: TopicDTO
}


export type UserAction = FetchTopic;
