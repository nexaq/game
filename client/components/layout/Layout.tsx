import React, {useMemo} from 'react';
import {Props} from "./types";
import Header from "../header";
import useFakeLoading from "client/hooks/useFakeLoading";
import css from './style.module.pcss';
import Footer from "client/components/footer";

const Layout: Props = ({ children, fakeLoading = false, memoizeChildrenBy}) => {
    const isLoading = fakeLoading ? useFakeLoading() : false;
    const isLoadingClassName = isLoading ? css._isLoading : '';

    // ОПТИМИЗАЦИЯ
    // Повторный ререндер всей страницы тяжелая операция
    // Для это опция memoizeChildren
    // Прост удобнее чем писать useMemo в родительском компоненте :p
    // <Header/> и <Footer/> обернуты в HOC memo
    // не фанат теории что все нужно оборачивать в HOC memo :p
    // поэтому тут чисто для прикола, а так юзаю только на компонентах с тяжелым рендером
    let childrenMemoized;
    if (memoizeChildrenBy !== undefined) {
        childrenMemoized = useMemo(() => children, memoizeChildrenBy);
    }

    return (
        <div className={`${css.layout} ${isLoadingClassName}`}>
            {!isLoading && <Header/>}
            {childrenMemoized ?? children}
            <Footer/>
        </div>
    );
};

export default Layout;