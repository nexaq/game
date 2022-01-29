import {Validations} from "../useValidation";
import useInput from "../useInput";
import mapObjectSameKeys from "client/utils/mapObjectSameKeys";

type Config = {
    [key in string]: Validations
}

export type SuccessCallback<C, A1, A2> = (data: A1, form: A2) => void;

export type SuccessCallbackArg<C> = Record<keyof C, string>;

export type InputResultItem = ReturnType<typeof useInput>;

export type InputResults<C> = Record<keyof C, InputResultItem>;

export default function useForm<C extends Config>(config: C, successCallback: SuccessCallback<C, SuccessCallbackArg<C>, InputResults<C>>): {
    submitCallback: () => void,
    form: InputResults<C>
} {
    let success = true;

    const useInputResults = mapObjectSameKeys<C, InputResults<C>>(
        config,
        (key) => {
            const input = useInput('', config[key])
            if (input.hasErrors) {
                success = false;
            }
            return input;
        }
    );

    const data: SuccessCallbackArg<C> = mapObjectSameKeys<typeof useInputResults, Record<keyof C, string>>(
        useInputResults,
        (key) => useInputResults[key].value
    );

    const form: InputResults<C> = mapObjectSameKeys<typeof useInputResults, InputResults<C>>(
        useInputResults,
        (key) => useInputResults[key]
    );

    return {
        submitCallback: () => {
            // react сделает это за один рендер!!
            // так что не паримся ;p
            Object.entries(useInputResults).forEach(([k, input]) => input.validate(true));

            if (success) {
                successCallback(data, form);
            }
        },
        form
    }
}