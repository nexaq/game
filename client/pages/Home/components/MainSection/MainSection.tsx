import Container from "client/components/Container";
import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const MainSection: Props = () => {
  return (
    <Container>
      <div className={css.mainSection}>
        <h1 className={css.title}>
          WORLD <br />
          OF STARSHIP
        </h1>
      </div>
    </Container>
  );
};

export default MainSection;
