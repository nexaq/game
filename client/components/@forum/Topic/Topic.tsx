import NormalHeader from "client/components/@forum/NormalHeader";
import Card from "client/components/Card";
import React from "react";

import { ButtonsContainer } from "../buttons";
import Inner from "../Inner";
import Text from "../Text";
import css from "./style.module.pcss";
import { Props } from "./types";

const Topic: Props = ({
  title,
  author,
  buttons,
  children,
  url,
  date,
  avatar,
}) => {
  return (
    <div>
      <Card>
        <Inner>
          <NormalHeader
            avatar={avatar}
            date={date}
            author={author}
            title={title}
            className={css.header}
            url={url}
          />
          <Text className={css.comment}>{children}</Text>
          {buttons && <ButtonsContainer>{buttons}</ButtonsContainer>}
        </Inner>
      </Card>
    </div>
  );
};

export default Topic;
