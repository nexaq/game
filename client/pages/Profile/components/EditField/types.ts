import { UserUpdateAttributes } from "client/api/user";
import { FC } from "react";

type OwnProps = {
  field: keyof UserUpdateAttributes;
  initialValues: UserUpdateAttributes;
  placeholder: string;
};

export type Props = FC<OwnProps>;
