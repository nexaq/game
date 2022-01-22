import React, {memo} from 'react';
import css from './style.module.pcss';
import {Props} from "./types";
import Grid from "client/components/grid";
import Link from "client/components/link";
import Container from "../container";

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

export default memo(Footer);