import {useEffect, useRef, useState} from "react";

/**
 * Загрузка с указанной задержкой
 * @param delay
 */
export default function useLoading(delay = 300): [boolean, typeof setLoading] {
    const timeoutRef = useRef<NodeJS.Timeout>()
    const [active, setActive] = useState(false);
    const [showLoading, setLoading] = useState(false);

    useEffect(() => {
        if (showLoading) {
            timeoutRef.current = setTimeout(() => {
                setActive(true);
            }, delay);
        } else {
            if (timeoutRef.current) {
                setActive(false);
                clearTimeout(timeoutRef.current);
            }
        }
    }, [showLoading]);

    return [active && showLoading, setLoading];
}