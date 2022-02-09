import {FC} from "react";
import {UserUpdateAttributes} from "client/api/user";
import {OwnProps as InputProps} from 'client/components/Input';

type OwnProps = {
    field: keyof UserUpdateAttributes,
    initialValues: UserUpdateAttributes,
    placeholder: string
};

export type Props = FC<OwnProps>;