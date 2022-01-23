import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Inner from "../Inner";
import Avatar from "client/components/Avatar";
import Text from "../Text";
import utils from "styles/utils.module.pcss";
import InfoBar from "../../InfoBar";
import {ButtonsContainer, ReplyButton, ViewAnswersButton} from "../buttons";

const Comment: Props = ({children, className = ''}) => {
    return (
        <>
            <Inner className={css.comment}>
                <div>
                    <Avatar/>
                </div>
                <div className={css.text}>
                    <InfoBar className={css.profileInfo} items={[
                        <span className={utils.textPrimary}>Tonald J Drump</span>,
                        '21.11.2021'
                    ]}/>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <ButtonsContainer>
                        <ViewAnswersButton />
                        <ReplyButton />
                    </ButtonsContainer>
                    {/*<div className={css.commentForm}>*/}
                    {/*    <CommentForm />*/}
                    {/*</div>*/}
                </div>
            </Inner>

        </>
    );
};

export default Comment;
