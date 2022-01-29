import React, {memo} from 'react';
import css from './style.module.pcss';
import {Props} from "./types";
import Grid from "client/components/Grid";
import Link from "client/components/Link";
import Container from "../Container";

const Footer: Props = () => {
    return (
        <div className={css.footer}>
            <Container>
                <Grid cols={2}>
                    <div className={css.contact}>Hit me up on github <Link to={'https://github.com/nexaq'} className={css.link} external>@nexaq</Link></div>
                    <div className={css.extra}>P.S. Возьмите меня на работу <br/> Пожалуйста!</div>
                </Grid>
            </Container>
        </div>
    );
};

// используется в Layout так что лучше обернуть в memo()
export default memo(Footer);