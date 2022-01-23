import React from 'react';
import css from './style.module.pcss';
import {Props} from "./types";
import Card from "../../Card";
import NormalHeader from "client/components/Forum/NormalHeader";
import CommentForm from "../CommentForm";
import Text from "../Text";
import Inner from "../Inner";
import {AnswersButton, ButtonsContainer, ReplyButton} from "../buttons";

const Question: Props = () => {
    return (
        <div>
            <Card>
                <Inner>
                    <NormalHeader className={css.header}/>
                    <Text className={css.comment}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip
                        ex ea commodo consequat.
                    </Text>
                    <ButtonsContainer>
                        <AnswersButton count={35} />
                        <ReplyButton/>
                    </ButtonsContainer>
                </Inner>
            </Card>
            <div className={css.commentForm}>
                <CommentForm />
            </div>
        </div>
    );
};

export default Question;
