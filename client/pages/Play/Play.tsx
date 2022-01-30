import React, {useEffect, useLayoutEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Props} from "./types";
import Layout from "client/components/Layout";
import Container from "client/components/Container";
import css from './style.module.pcss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {checkAuth} from "../../reducers/user/actions";
import {useDispatch} from "react-redux";
import {get} from "../../utils/api";


let Play: Props = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());

    })


    return (
        <>
            <Helmet>
                <title>PLAY</title>
            </Helmet>
            <Layout title="Play">
                <Container>
                    <div>
                        <canvas className={css.canvas} />
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Play;