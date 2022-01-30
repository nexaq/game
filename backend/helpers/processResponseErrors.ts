import makeResponseValidationData from "../helpers/responseValidation";
import {ServerError, UnauthorizedError, ValidationError} from "../errors/api";

export default function processResponseErrors(err: Error) {
    const validationError = makeResponseValidationData(err);

    if (validationError) {
        return validationError;
    }

    if (err instanceof ValidationError || err instanceof ServerError || err instanceof UnauthorizedError) {
        return err;
    }

    // undefined error!
    return new ServerError(err);
}