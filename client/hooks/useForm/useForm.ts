import {Validations} from "../useValidation";
import useInput from "../useInput";
import mapObjectSameKeys from "client/utils/mapObjectSameKeys";
import {default as responseInFormHelper} from "../../helpers/validationResponseToForm";
import {ResponseValidation} from "../../utils/api";
import {useEffect} from "react";

type Config = {
    [key in string]: Validations
}

export type ApplyResponse<Data extends Record<keyof FormResult, unknown>, FormResult> = (response: ResponseValidation<keyof Data>) => boolean;

export type SuccessCallback<SuccessData extends Record<keyof FormResult, unknown>, FormResult> = (data: SuccessData, form: FormResult, responseInForm: ApplyResponse<SuccessData, FormResult>) => void;

export type SuccessData<C> = Record<keyof C, string>;

export type InputResultItem = ReturnType<typeof useInput>;

export type FormResult<C> = Record<keyof C, InputResultItem>;

export type InitialValues<C> = Partial<Record<keyof C, string>>;

const useInitValue = <C>(attribute: keyof C, input: ReturnType<typeof useInput>, initialValues?: InitialValues<C>) => {
    let initialValue = '';

    if (initialValues) {
        initialValue = initialValues[attribute] ?? '';
    }

    useEffect(() => {
        if (initialValue) {
            input.setValue(initialValue);
        }
    }, [initialValue]);
}

export default function useForm<C extends Config>(config: C, successCallback: SuccessCallback<SuccessData<C>, FormResult<C>>, initialValues?: InitialValues<C>): {
    submitCallback: () => void,
    form: FormResult<C>
} {
    let success = true;

    const useInputResults = mapObjectSameKeys<C, FormResult<C>>(
        config,
        (key) => {
            const input = useInput('', config[key]);

            useInitValue(key, input, initialValues);

            if (input.hasErrors) {
                success = false;
            }
            return input;
        }
    );

    const data: SuccessData<C> = mapObjectSameKeys<typeof useInputResults, Record<keyof C, string>>(
        useInputResults,
        (key) => useInputResults[key].value
    );

    const form: FormResult<C> = mapObjectSameKeys<typeof useInputResults, FormResult<C>>(
        useInputResults,
        (key) => useInputResults[key]
    );

    const applyValidationFromResponse: ApplyResponse<typeof data, typeof form> = (
        response
    ) => {
        return responseInFormHelper(form, response) && response.status === 200;
    }

    return {
        submitCallback: () => {
            // react сделает это за один рендер!!
            // так что не паримся ;p
            Object.entries(useInputResults).forEach(([k, input]) => input.validate(true));

            if (success) {
                successCallback(data, form, applyValidationFromResponse);
            }
        },
        form
    }
}