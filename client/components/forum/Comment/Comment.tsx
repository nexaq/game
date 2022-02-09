import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Inner from "../Inner";
import Avatar from "client/components/Avatar";
import Text from "../Text";
import utils from "styles/utils.module.pcss";
import InfoBar from "../../InfoBar";
import {ButtonsContainer} from "../buttons";

const Comment: Props = ({author, comment, buttons, date}) => {
    return (
        <>
            <Inner className={css.comment}>
                <div>
                    <Avatar/>
                </div>
                <div className={css.text}>
                    <InfoBar className={css.profileInfo} items={[
                        <span className={utils.textPrimary}>{author}</span>,
                        ...(date ? [date] : [])
                    ]}/>
                    <Text>
                        {comment}
                    </Text>
                    {buttons && <ButtonsContainer>
                        {buttons}
                    </ButtonsContainer>}
                </div>
            </Inner>

        </>
    );
};

export default Comment;
