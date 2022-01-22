import {useCallback, useRef} from "react";


export default function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef<NodeJS.Timeout>();

    return useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}