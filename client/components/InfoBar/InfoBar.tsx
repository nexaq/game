import React from "react";
import { v4 as id } from "uuid";

import css from "./style.module.pcss";
import { Props } from "./types";

const InfoBar: Props = ({ items, className = "" }) => {
  return (
    <div className={`${css.infoBar} ${className}`}>
      {items.map((item, key) => {
        const dot = key < items.length - 1 ? <div className={css.dot} /> : null;
        return (
          <React.Fragment key={id()}>
            <div key={id()} className={css.item}>
              {item}
            </div>
            {dot}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default InfoBar;
