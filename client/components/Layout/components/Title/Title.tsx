import Heading from "client/components/@typography";
import Container from "client/components/Container";
import React from "react";

import css from "../../style.module.pcss";
import { Props } from "./types";

const Title: Props = ({ title }) => {
  return (
    <div className={css.container}>
      <Container>
        <Heading level="h1" className={css.title}>
          {title}
        </Heading>
      </Container>
    </div>
  );
};

export default Title;
