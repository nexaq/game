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
                        captain your own starship
                    </Heading>
                </div>
                <div className={css.right}>
                    <Paragraph className={css.info}>
                        The war with the aliens brought chaos to the developed worlds. The Galaxy is divided by the remnants of star empires, independent factions and corporations. Command your starship now, explore different planets and battle with millions of other players
                    </Paragraph>
                </div>
            </Container>
        </div>
    );
};

export default AboutSection;