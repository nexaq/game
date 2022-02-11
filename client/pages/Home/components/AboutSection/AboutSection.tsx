import React from 'react';
import {Props} from "./types";
import Container from "client/components/Container";
import css from './style.module.pcss';
import Heading from "client/components/@typography";
import Paragraph from "client/components/@typography/Paragraph";

let AboutSection: Props = () => {
    return (
        <div>
            <Container className={css.container}>
                <div className={css.left}>
                    <Heading level={'h2'} className={css.title}>
                        best game to send
                        your mom to space
                    </Heading>
                </div>
                <div className={css.right}>
                    <Paragraph className={css.info}>
                        As your partner we do a lot, but what's more important is how we help you move forward – agnostic of
                        your industry or our output. Whether it’s to better align on your business challenge, understand the
                        people you need to reach.
                    </Paragraph>
                </div>
            </Container>
        </div>
    );
};

export default AboutSection;