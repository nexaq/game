import { FormResult } from "../hooks/useForm/useForm";
import { isValidationError } from "../utils/api/guards";
import getServerErrorMessage from "./getServerErrorMessage";

export default function validationResponseToForm<FormFields, Response>(
  form: FormResult<FormFields>,
  response: Response
) {
  const handleValidationErrors = (
    errors: ResponseValidationErrorItem<keyof FormFields>[] | undefined
  ) => {
    errors?.forEach(({ attribute, type, message }) => {
      if (
        attribute &&
        form[attribute] &&
        type &&
        typeof attribute === "string"
      ) {
        form[attribute].setCustomError(
          getServerErrorMessage(type, attribute, message)
        );
      }
    });
  };

  if (isValidationError<FormFields>(response)) {
    handleValidationErrors(response.data?.errors);
    return false;
  }
  return true;
}
