import {FC} from "react";

type OwnProps = {
    topicId: number,
    commentId?: number,
}

export type Props = FC<OwnProps>;