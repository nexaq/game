import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Container from "client/components/Container";


let MainSection: Props = () => {
    return (
        <Container>
            <div className={css.mainSection}>
                <h1 className={css.title}>
                    WORLD <br/>OF STARSHIP
                </h1>
            </div>
        </Container>
    );
};

export default MainSection;