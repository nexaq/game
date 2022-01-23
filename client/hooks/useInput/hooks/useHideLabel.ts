import {useEffect, useState} from "react";

type MoveLabel = (value: string) => void;

export default function useHideLabel(value: string): [boolean, MoveLabel] {

    const [shouldHideLabel, setHideLabel] = useState(value !== '');
    const moveLabel: MoveLabel = (value: string) => {
        if (value === '') {
            setHideLabel(false);
        } else {
            setHideLabel(true);
        }
    }

    useEffect(() => {
        moveLabel(value);
    }, []);

    return [shouldHideLabel, moveLabel];
}