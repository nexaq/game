import breakPoints from "client/helpers/activeBreakPoints";
import { useEffect, useState } from "react";

import useThrottle from "../useThrottle";

export interface Config<T> {
  value: T;
  valueSm?: T;
  valueMd?: T;
  valueLg?: T;
  valueXl?: T;
}

/**
 * Удобно если не хочется передавать объект в index
 */
export function makeConfig<T>(
  value: T,
  valueSm?: T,
  valueMd?: T,
  valueLg?: T,
  valueXl?: T
): Config<T> {
  return { value, valueSm, valueMd, valueLg, valueXl };
}

const index = <T>(config: Config<T>): T => {
  const { value, valueSm, valueMd, valueLg, valueXl } = config;

  const makeBreakpointConfigItem =
    // eslint-disable-next-line consistent-return
    (value: T | undefined, setValue: (value: T) => void) => () => {
      if (value !== undefined) {
        setValue(value);
        // stop on this breakpoint
        return true;
      }
    };

  const defaultValue = value;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const onResize = () => {
    breakPoints({
      xl: makeBreakpointConfigItem(valueXl, setCurrentValue),
      lg: makeBreakpointConfigItem(valueLg, setCurrentValue),
      md: makeBreakpointConfigItem(valueMd, setCurrentValue),
      sm: makeBreakpointConfigItem(valueSm, setCurrentValue),
      default: makeBreakpointConfigItem(defaultValue, setCurrentValue),
    });
  };

  const onResizeDebounced = useThrottle(onResize, 100);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResizeDebounced);
    return () => window.removeEventListener("resize", onResizeDebounced);
  }, []);

  return currentValue;
};

export default index;
