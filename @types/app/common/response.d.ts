export {}

declare global {
    type ResponseErrorItem<AttributeType> = {
        attribute: AttributeType | null,
        type: string | null
    }

    type ResponseError<AttributeType> = {
        errors: ResponseErrorItem<AttributeType>[]
    };
}