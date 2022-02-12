import { ValidationError } from "backend/errors/api";
import { ValidationErrorItem } from "sequelize";
import {
  UniqueConstraintError,
  ValidationError as SequelizeValidationError,
} from "sequelize/dist/lib/errors";

const makeResponseData = <AttributeType>(
  errors: ValidationErrorItem[]
): ResponseValidationErrorItem<AttributeType>[] => {
  return errors.map((item) => {
    return {
      attribute: item.path as AttributeType | null,
      type: item.type,
    };
  });
};

export function isValidationError(
  error: unknown
): error is UniqueConstraintError | SequelizeValidationError {
  const validationErrorNames = [
    "SequelizeValidationError",
    "SequelizeUniqueConstraintError",
  ];
  const { name } = error as UniqueConstraintError | SequelizeValidationError;

  return name !== undefined && validationErrorNames.includes(name);
}

export default function makeResponseValidationData<AttributeType>(
  e: unknown
): ValidationError<AttributeType> | undefined {
  if (isValidationError(e)) {
    const errors = makeResponseData<AttributeType>(e.errors);

    return new ValidationError(errors);
  }
}
