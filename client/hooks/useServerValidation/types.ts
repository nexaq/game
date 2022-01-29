import {NormalResponse} from "../../utils/api";

export type ResponseCreationData<AttributeType> = {
    success?: boolean,
    errors?: ResponseValidationErrorItem<AttributeType>[],
}

export type ResponseCreation<AttributeType> = NormalResponse<ResponseCreationData<AttributeType>>;

export type HandleValidationErrors<AttributeType> = (errors?: ResponseValidationErrorItem<AttributeType>[]) => void