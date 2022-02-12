import { CommonStore } from "../../utils/infrastructure/store";

export const topicSelector = (store: CommonStore) => store.topic.topic;
