import { CommonStore } from "../../utils/infrastructure/store";

export const leadersSelector = (store: CommonStore) =>
  store.leaderboard.leaders;
