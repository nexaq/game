
export default class ApiError extends Error {
    status;

    constructor(status: number) {
        super();
        this.status = status;
    }
}

class ApiErrorWithResponse extends ApiError {
    responseData: unknown;

    getResponseData() {
        return this.responseData;
    }
}

export class ValidationError<AttributeType> extends ApiErrorWithResponse {
    responseData: ResponseValidationError<AttributeType>;

    constructor(errors: ResponseValidationErrorItem<AttributeType>[]) {
        super(400);
        this.responseData = {
            errors
        }
    }
}

export class ServerError extends ApiErrorWithResponse {
    responseData: ResponseServerError;

    constructor(e: any, message = 'Server Error') {
        super(500);
        this.responseData = {message};
        console.error(e);
    }
}

