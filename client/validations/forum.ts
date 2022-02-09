import {Validations} from "../hooks/useValidation";
import {TopicCreateValidationAttributes} from "../api/forum";

type TopicCreateRules = Record<keyof TopicCreateValidationAttributes, Validations>

export const topicCreateRules: TopicCreateRules = {
    title: { notEmpty: true, maxLength: 32, minLength: 2 },
    description: { notEmpty: true, maxLength: 1000, minLength: 2 },
}