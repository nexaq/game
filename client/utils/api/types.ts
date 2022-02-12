export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}
export type NormalResponse<T> = {
  status: number;
  data?: T;
};

export type FormResponse<
  NormalFields,
  ValidationFields = NormalFields
> = NormalResponse<FormResponseData<NormalFields, ValidationFields>>;
export type FormResponseData<NormalFields, ValidationFields = NormalFields> =
  | ResponseValidationData<ValidationFields>
  | NormalFields;

export type ResponseValidation<AttributeType> = NormalResponse<
  ResponseValidationData<AttributeType>
>;
export type ResponseValidationData<AttributeType> = {
  errors?: ResponseValidationErrorItem<AttributeType>[];
};

export type ResponseNotFound = NormalResponse<ResponseNotFoundData>;
export type ResponseNotFoundData = "not found";
