import {ChangeEventHandler, FC} from "react";

type OwnProps = {
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: string,
    errors: string[],
};

export type Props = FC<OwnProps>;