import makeResponseValidationData from "../helpers/responseValidation";
import {ServerError} from "../errors/api";

export default function processResponseErrors(err: Error) {
    const validationError = makeResponseValidationData(err);

    if (validationError) {
        return validationError;
    }

    if (err instanceof ServerError) {
        return err;
    }

    // undefined error!
    return new ServerError(err);
}