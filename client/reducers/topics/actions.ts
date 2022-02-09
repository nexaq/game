import {TypedThunkAction} from "client/utils/infrastructure/store";
import {getTopics, TopicDTO} from "client/api/forum";
import {FetchTopics, TopicActionType} from "./types";

const createFetchTopicsAction = (payload: TopicDTO[]): FetchTopics => {
    return { type: TopicActionType.FETCH_ALL, payload }
}

export const fetchTopics = (useRequestCallback?: <T>(request: () => Promise<T>) => Promise<T>): TypedThunkAction<TopicActionType.FETCH_ALL> => async (dispatch) => {
    if (useRequestCallback) {
        useRequestCallback(() => getTopics().then(({data}) => {
            dispatch(createFetchTopicsAction(data ?? []));
        }));
    } else {
        try {
            const {data} = await getTopics();
            dispatch(createFetchTopicsAction(data ?? []));
        } catch (e) {
            alert('Error occurred! Try later');
        }
    }
}
