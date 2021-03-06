import React from "react";
import { v4 as id } from "uuid";

import css from "./style.module.pcss";
import { Props } from "./types";

const FormGroup: Props = ({ children, errors = [] }) => {
  return (
    <div className={css.formGroup}>
      {children}

      {!!errors.length && (
        <div className={css.errors}>
          {errors.map((error) => {
            return (
              <div className={css.error} key={id()}>
                {error}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FormGroup;
