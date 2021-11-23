import {Props} from "./types";
import React from "react";
import {Helmet} from 'react-helmet';
import Core from "../../components/core";

// Предупреждение!! Входной компонеет должен быть экспортировам из отдельного модуля
// Иначе не работает fast-refresh!!!
const DesktopBundle: Props = props => {
    return (
        <>
            <Helmet>
                <html lang="en"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
            </Helmet>
            <div>XXXXXXXXX</div>
            <Core {...props.data}/>
        </>
    );
};

export default DesktopBundle;
