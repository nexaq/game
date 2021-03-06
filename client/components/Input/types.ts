import { ChangeEventHandler, FC, FocusEventHandler } from "react";

export type OwnProps = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: "text" | "password" | "tel";
  hasError?: boolean;
};

export type Props = FC<OwnProps>;
