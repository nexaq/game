import {Dispatch, SetStateAction, useEffect, useState} from "react";

export type Validations = {
    minLength?: number,
    maxLength?: number,
    notEmpty?: boolean,
    repeatAfter?: string,
}

export default function useValidation(value: string, validations: Validations, setDirty: Dispatch<SetStateAction<boolean>>) {
    const [errors, updateErrors] = useState<string[]>([]);
    let [customError, setCustomError] = useState<string>();

    const validate = (makeDirty = false) => {
        const errorMessagesCurrent: string[] = [];

        (Object.getOwnPropertyNames(validations) as (keyof Validations)[]).forEach((validation) => {
            const constraint = validations[validation];

            if (constraint === undefined) {
                return;
            }

            switch (validation) {
                case 'minLength':
                    if (constraint && value.length < constraint) {
                        errorMessagesCurrent.push(`Min ${constraint} symbols!`);
                    }
                    break;
                case 'maxLength':
                    if (value.length > constraint) {
                        errorMessagesCurrent.push(`Max ${constraint} symbols!`);
                    }
                    break;
                case 'notEmpty':
                    if (!value) {
                        errorMessagesCurrent.push(`Can't be empty!`);
                    }
                    break;
                case 'repeatAfter':
                    if (value !== constraint) {
                        errorMessagesCurrent.push(`Does not match!`);
                    }
                    break;
            }

            if (makeDirty) {
                setDirty(true);
            }
        });

        updateErrors(errorMessagesCurrent);
    };

    useEffect(() => {
        validate();
    }, []);

    useEffect(() => {
        validate();
        setCustomError(undefined);
    }, [value]);

    const allErrors = [...errors];

    if (customError !== undefined) {
        allErrors.push(customError);
    }

    const hasErrors = !!allErrors.length;


    return {
        hasErrors,
        errors: allErrors,
        validate,
        setCustomError
    }
}