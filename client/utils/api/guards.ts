import { NormalResponse, ResponseNotFound, ResponseValidation } from "./types";

export const isValidationError = <FormFields>(
  response: any
): response is ResponseValidation<keyof FormFields> => {
  return response && "status" in response && response.status === 400;
};

export const isNotFoundError = (
  response: any
): response is ResponseNotFound => {
  return response && "status" in response && response.status === 404;
};

export const isSuccessFormResponse = <FormFields>(
  response: any
): response is NormalResponse<FormFields> => {
  return (
    response &&
    "status" in response &&
    "data" in response &&
    response.status === 200
  );
};
