import React from 'react';
import {Props} from "./types";
import Container from "client/components/Container";
import Grid from "client/components/Grid";
import Paragraph from "client/components/@typography/Paragraph";
import css from './style.module.pcss';
import LinkButton from "client/components/Button";
import {ROUTES} from "client/routes";

let LetsPlaySection: Props = () => {
    return (
        <div>
            <Container>
                <Grid cols={1} colsLg={2} colGap={140} rowGap={40}>
                    <div className={css.title}>Let’s <div className={css.title__newLine}>play</div></div>
                    <div>
                        <Paragraph className={css.description}>We are always on the lookout for great clients who are passionate about their products and customers.</Paragraph>
                        <LinkButton style={'inversed'} url={ROUTES.PLAY.INDEX}>play now</LinkButton>
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export default LetsPlaySection;