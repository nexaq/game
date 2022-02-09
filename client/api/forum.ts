import {ApiPath} from "./consts";
import {UserDTO} from "./user";
import {get, post, ResponseValidationData} from "client/utils/api";

export type TopicDTO = {
    id: number,
    title: string,
    description: string,
    userId: number,
    user: UserDTO,
    createdAt: string,
    comments: CommentDTO[]
}

export const getTopics = () => get<TopicDTO[]>(ApiPath.FORUM.TOPIC.ALL, {
    refreshTokenOnFail: false
});

export type TopicCreateValidationAttributes = Pick<TopicDTO, 'title' | 'description'>;
export type TopicCreateResponseData = ResponseValidationData<keyof TopicCreateValidationAttributes> & Partial<SuccessResponse>;
export const create = <T = TopicDTO>(data: T) => post<TopicCreateResponseData>(ApiPath.FORUM.TOPIC.CREATE, data);

export type TopicResponseData = TopicDTO & Partial<SuccessResponse>;
export const getTopic = (id: number) => get<TopicResponseData>(ApiPath.FORUM.TOPIC.VIEW.replace(':id', id.toString()), {
    refreshTokenOnFail: false
});


export const topic = {
    create,
    get: getTopic,
}


export type CommentDTO = {
    id: number,
    comment: string,
    user: UserDTO,
    commentId: number,
    createdAt: string,
    comments: CommentDTO[]
}

export type CommentCreateValidationAttributes = Pick<CommentDTO, 'comment'>;
export type CommentCreateResponseData = ResponseValidationData<keyof CommentCreateValidationAttributes> & Partial<SuccessResponse>;
export const createComment = <T = TopicDTO>(data: T) => post<CommentCreateResponseData>(ApiPath.FORUM.COMMENT.CREATE, data);

export const comments = {
    create: createComment,
}