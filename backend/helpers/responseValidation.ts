import {UniqueConstraintError, ValidationError} from "sequelize/dist/lib/errors";
import {ValidationErrorItem} from "sequelize";

const makeResponseData = <AttributeType>(errors: ValidationErrorItem[]): ResponseError<AttributeType> => {
    const safeErrors = errors.map((item) => {
        return {
            attribute: item.path as any,
            type: item.type,
        };
    });
    return {
        errors: safeErrors
    }
}

export default function makeResponseValidationData<AttributeType>(e: UniqueConstraintError | ValidationError):  ResponseError<AttributeType> | null {
    if (e.name === 'SequelizeValidationError' || e.name === 'SequelizeUniqueConstraintError') {
        return makeResponseData<AttributeType>(e.errors);
    }

    return null;
}