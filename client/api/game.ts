import { post } from "../utils/api/api";
import { ApiPath } from "./consts";

type Score = {
  score: number;
};

const create = (data: Score) =>
  post<SuccessResponse>(ApiPath.GAME.RESULT.CREATE, data);

export { create };
