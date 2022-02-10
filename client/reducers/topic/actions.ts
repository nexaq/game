import {TypedThunkAction} from "../../utils/infrastructure/store";
import {topic, TopicDTO} from "../../api/forum";
import {FetchTopic, TopicActionType} from "./types";
import history from "../../components/CustomBrowserRouter/history";
import {ROUTES} from "../../routes";

const createFetchTopicAction = (payload: TopicDTO ): FetchTopic => {
    return { type: TopicActionType.FETCH, payload }
}

export const fetchTopic = (id: number, useRequestCallback?: <T>(request: () => Promise<T>) => Promise<T>): TypedThunkAction<TopicActionType.FETCH> => async (dispatch) => {
    if (useRequestCallback) {
        useRequestCallback(async () => {
            const {data, status} = await topic.get(id);
            if (data && status === 200) {
                dispatch(createFetchTopicAction(data));
            } else if (status === 404) {
                history.push(ROUTES.NOT_FOUND_PAGE.INDEX);
            }
        });
    } else {
        try {
            const {data, status} = await topic.get(id);
            if (data && status === 200) {
                dispatch(createFetchTopicAction(data));
            }
        } catch (e) {
            alert('Error occurred! Try later');
        }
    }
}
