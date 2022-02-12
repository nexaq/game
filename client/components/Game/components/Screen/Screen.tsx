import React from "react";

import Button from "../../../Button/Button";
import css from "./style.module.pcss";
import { Props } from "./types";

const Screen: Props = ({ title, buttonText, onClick, active }) => {
  return (
    <>
      {active && (
        <div className={css.screen}>
          <div>
            {title && <div className={css.alertTitle}>{title}</div>}
            <Button onClick={onClick}>{buttonText}</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Screen;
