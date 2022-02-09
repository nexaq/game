import React from 'react';
import css from './style.module.pcss';
import {Props} from "./types";
import Card from "client/components/Card";
import NormalHeader from "client/components/forum/NormalHeader";
import Text from "../Text";
import Inner from "../Inner";
import {ButtonsContainer} from "../buttons";

const Topic: Props = ({ title, author, buttons, children, url, date, avatar }) => {

    return (
        <div>
            <Card>
                <Inner>
                    <NormalHeader avatar={avatar} date={date} author={author} title={title} className={css.header} url={url}/>
                    <Text className={css.comment}>
                        { children }
                    </Text>
                    {buttons &&
                        <ButtonsContainer>
                            {buttons}
                        </ButtonsContainer>
                    }
                </Inner>
            </Card>
        </div>
    );
};

export default Topic;
