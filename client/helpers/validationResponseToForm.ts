import getServerErrorMessage from "./getServerErrorMessage";
import {FormResult} from "../hooks/useForm/useForm";
import {ResponseValidation} from "../utils/api";

export default function validationResponseToForm<Response, D>(
        form: FormResult<D>,
        response: ResponseValidation<keyof D> | Response
    ) {

    const isValidationError = (response: any): response is ResponseValidation<keyof D>=> {
        return response.status === 400;
    }

    const handleValidationErrors = (errors: ResponseValidationErrorItem<keyof D>[] | undefined) => {
        errors?.forEach(({attribute, type, message}) => {
            if (attribute && form[attribute] && type && typeof attribute === 'string') {
                form[attribute].setCustomError(getServerErrorMessage(type, attribute, message));
            }
        });
    }

    if (isValidationError(response)) {
        handleValidationErrors(response.data?.errors);
        return false;
    } else {
        return true;
    }
}