import { useCallback, useRef } from "react";

export default function useThrottle(
  callback: (...args: unknown[]) => void,
  delay: number
) {
  const isThrottled = useRef<boolean>();

  return useCallback(
    (...args) => {
      if (isThrottled.current) {
        return;
      }

      callback(...args);
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}
