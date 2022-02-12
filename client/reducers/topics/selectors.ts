import { CommonStore } from "../../utils/infrastructure/store";

export const topicsSelector = (state: CommonStore) => state.topics?.topics;
