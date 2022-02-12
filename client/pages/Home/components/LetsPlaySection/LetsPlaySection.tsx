import Paragraph from "client/components/@typography/Paragraph";
import LinkButton from "client/components/Button";
import Container from "client/components/Container";
import Grid from "client/components/Grid";
import { ROUTES } from "client/routes";
import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const LetsPlaySection: Props = () => {
  return (
    <div>
      <Container>
        <Grid cols={1} colsLg={2} colGap={140} rowGap={40}>
          <div className={css.title}>
            Let’s <div className={css.title__newLine}>play</div>
          </div>
          <div>
            <Paragraph className={css.description}>
              Looking for the best free browser game? Whether you’re broke or
              just frugal, free is a price point that appeals to everybody’s
              purse.{" "}
            </Paragraph>
            <LinkButton style="inversed" url={ROUTES.PLAY.INDEX}>
              play now
            </LinkButton>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default LetsPlaySection;
