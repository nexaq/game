import {NormalResponse} from "../../utils/api";

export type ResponseCreationData<AttributeType> = {
    success?: boolean,
    errors?: ResponseErrorItem<AttributeType>[],
}

export type ResponseCreation<AttributeType> = NormalResponse<ResponseCreationData<AttributeType>>;

export type HandleValidationErrors<AttributeType> = (errors?: ResponseErrorItem<AttributeType>[]) => void