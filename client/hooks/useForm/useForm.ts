import mapObjectSameKeys from "client/utils/mapObjectSameKeys";
import { useEffect } from "react";

import validationResponseToForm from "../../helpers/validationResponseToForm";
import { FormResponse } from "../../utils/api/types";
import useInput from "../useInput";
import { Validations } from "../useValidation";

type Config = {
  [key in string]: Validations;
};

export type ApplyResponse = <ValidationFields>(
  response: FormResponse<unknown, ValidationFields>
) => boolean;

export type SuccessCallback<
  SuccessData extends Record<keyof FormResult, unknown>,
  FormResult
> = (
  data: SuccessData,
  form: FormResult,
  responseInForm: ApplyResponse
) => void;

export type SuccessData<C> = Record<keyof C, string>;

export type InputResultItem = ReturnType<typeof useInput>;

export type FormResult<C> = Record<keyof C, InputResultItem>;

export type InitialValues<C> = Partial<Record<keyof C, string>>;

const useInitValue = <C>(
  attribute: keyof C,
  input: ReturnType<typeof useInput>,
  initialValues?: InitialValues<C>
) => {
  let initialValue = "";

  if (initialValues) {
    initialValue = initialValues[attribute] ?? "";
  }

  useEffect(() => {
    if (initialValue) {
      input.setValue(initialValue);
    }
  }, [initialValue]);
};

export default function useForm<C extends Config>(
  config: C,
  successCallback: SuccessCallback<SuccessData<C>, FormResult<C>>,
  initialValues?: InitialValues<C>
): {
  submitCallback: () => void;
  form: FormResult<C>;
} {
  let success = true;

  const useInputResults = mapObjectSameKeys<C, FormResult<C>>(config, (key) => {
    const input = useInput("", config[key]);

    useInitValue(key, input, initialValues);

    if (input.hasErrors) {
      success = false;
    }
    return input;
  });

  const data: SuccessData<C> = mapObjectSameKeys<
    typeof useInputResults,
    Record<keyof C, string>
  >(useInputResults, (key) => useInputResults[key].value);

  const form: FormResult<C> = mapObjectSameKeys<
    typeof useInputResults,
    FormResult<C>
  >(useInputResults, (key) => useInputResults[key]);

  const applyValidationFromResponse: ApplyResponse = (response) => {
    return validationResponseToForm(form, response) && response.status === 200;
  };

  return {
    submitCallback: () => {
      // react сделает это за один рендер!!
      // так что не паримся ;p
      Object.entries(useInputResults).forEach(([, input]) =>
        input.validate(true)
      );

      if (success) {
        successCallback(data, form, applyValidationFromResponse);
      }
    },
    form,
  };
}
