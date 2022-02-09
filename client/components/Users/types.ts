import React, {FC} from "react";


type Item = {
    key: number
    avatar: JSX.Element,
    name: string,
    extra: string,
}

type OwnProps = {
    items: Item[]
};


export type Props = FC<OwnProps>;

