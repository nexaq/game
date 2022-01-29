export {}

declare global {
    type ResponseValidationErrorItem<AttributeType> = {
        attribute: AttributeType | null,
        type: string | null
    }

    type ResponseValidationError<AttributeType> = {
        errors: ResponseValidationErrorItem<AttributeType>[]
    };

    type ResponseServerError = {
        message: string
    }
}