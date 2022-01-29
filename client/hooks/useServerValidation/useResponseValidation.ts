import {HandleValidationErrors, ResponseCreation} from "./types";

export function useResponseValidation<AttributeType>(response: ResponseCreation<AttributeType>, handleValidationErrors: HandleValidationErrors<AttributeType>): boolean {
    const {data, status} = response;

    if (status === 200 && data?.success) {
        return true;
    }

    if (status === 400) {
        if (data?.errors) {
            handleValidationErrors(data.errors);
        }
        return false;
    }

    return false;
}