export {};

declare global {
  type ResponseValidationErrorItem<AttributeType> = {
    attribute: AttributeType | null;
    type: string | null;
    message?: string;
  };

  type ResponseValidationError<AttributeType> = {
    errors: ResponseValidationErrorItem<AttributeType>[];
  };

  type ResponseServerError = {
    message: string;
  };

  type SuccessResponse = {
    success: true;
  };
}
