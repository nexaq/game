import Avatar from "client/components/Avatar";
import React from "react";
import utils from "styles/utils.module.pcss";

import InfoBar from "../../InfoBar";
import { ButtonsContainer } from "../buttons";
import Inner from "../Inner";
import Text from "../Text";
import css from "./style.module.pcss";
import { Props } from "./types";

const Comment: Props = ({ author, comment, buttons, date, avatar }) => {
  return (
    <Inner className={css.comment}>
      <div>
        <Avatar src={avatar} />
      </div>
      <div className={css.text}>
        <InfoBar
          className={css.profileInfo}
          items={[
            <span key={1} className={utils.textPrimary}>
              {author}
            </span>,
            ...(date ? [date] : []),
          ]}
        />
        <Text>{comment}</Text>
        {buttons && <ButtonsContainer>{buttons}</ButtonsContainer>}
      </div>
    </Inner>
  );
};

export default Comment;
