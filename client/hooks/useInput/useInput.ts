import {ChangeEvent, useState} from "react";
import useValidation, {Validations} from "../useValidation";

export default function useInput(initialValue: string, validations: Validations) {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations, setDirty);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        setDirty(true);
    }

    const displayError = isDirty && valid.hasErrors;
    const displayErrors = displayError ? valid.errors : [];

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
        displayError,
        displayErrors,
        setValue,
        setDirty
    }
}

export function makeInputValidationProps(config: ReturnType<typeof useInput>) {
    return {
        value: config.value,
        onChange: config.onChange,
        onBlur: config.onBlur,
        hasError: config.displayError,
    }
}