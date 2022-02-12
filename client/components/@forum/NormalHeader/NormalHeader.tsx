import Avatar from "client/components/Avatar";
import Link from "client/components/Link";
import React from "react";
import utils from "styles/utils.module.pcss";

import InfoBar from "../../InfoBar";
import css from "./style.module.pcss";
import { Props } from "./types";

const NormalHeader: Props = ({
  title,
  author,
  className = "",
  url,
  date,
  avatar,
}) => {
  return (
    <div className={`${css.header} ${className}`}>
      <div>
        <Avatar src={avatar} />
      </div>
      <div className={css.text}>
        {url && (
          <Link to={url} className={css.title}>
            {title}
          </Link>
        )}
        {!url && <div className={css.title}>{title}</div>}
        <InfoBar
          items={[
            <span key={1} className={utils.textPrimary}>
              {author}
            </span>,
            ...(date ? [date] : []),
          ]}
        />
      </div>
    </div>
  );
};

export default NormalHeader;
