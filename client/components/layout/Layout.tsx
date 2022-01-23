import React, {useMemo} from 'react';
import {Props} from "./types";
import Header from "../header";
import useFakeLoading from "client/hooks/useFakeLoading";
import css from './style.module.pcss';
import Footer from "client/components/footer";
import Heading from "../typography";
import Container from "../container";

const Layout: Props = ({children, fakeLoading = false, memoizeChildrenBy, headerOverlapsContent = false, title}) => {
    const isLoading = fakeLoading ? useFakeLoading() : false;
    const isLoadingClassName = isLoading ? css._isLoading : '';
    const headerOverlapsClassName = headerOverlapsContent ? '' : css.headerOverlap;

    // ОПТИМИЗАЦИЯ
    // Повторный ререндер всей страницы тяжелая операция
    // Для это опция memoizeChildren
    // Прост удобнее чем писать useMemo в родительском компоненте :p
    // <Header/> и <Footer/> обернуты в HOC memo
    // не фанат теории что все нужно оборачивать в HOC memo :p
    // поэтому тут чисто для прикола
    let childrenMemoized;
    if (memoizeChildrenBy !== undefined) {
        childrenMemoized = useMemo(() => children, memoizeChildrenBy);
    }

    const titleContainer = <div className={css.title__container}>
        <Container>
            <Heading level={'h1'} className={css.title}>{title}</Heading>
        </Container>
    </div>;

    return (
        <div className={`${css.layout} ${isLoadingClassName} ${headerOverlapsClassName}`}>
            <div className={css.minHeight}>
                {!isLoading && <Header/>}
                {title && titleContainer}
                {childrenMemoized ?? children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;