import useHideLabel from "client/hooks/useInput/hooks/useHideLabel";
import React, { useEffect, useState } from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const Input: Props = ({
  value = "",
  placeholder = "",
  onChange,
  onBlur,
  type = "text",
  hasError = false,
}) => {
  const [isFocused, setFocused] = useState(false);

  const [shouldHideLabel, setHideLabel] = useHideLabel(value);

  const hideLabelClassName = shouldHideLabel ? css.label_hide : "";
  const borderActiveClassName = isFocused ? css.border_active : "";
  const errorClassName = hasError ? css.error : "";

  useEffect(() => setHideLabel(value), [value]);

  return (
    <div className={css.wrapper}>
      <div className={`${css.inputGroup} ${errorClassName}`}>
        <div className={`${css.label} ${hideLabelClassName}`}>
          {placeholder}
        </div>
        <input
          type={type}
          value={value}
          className={css.input}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            if (onBlur) {
              onBlur(e);
            }
          }}
          onChange={onChange}
        />
        <div className={`${css.border} ${borderActiveClassName}`} />
      </div>
    </div>
  );
};

export default Input;
