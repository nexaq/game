import {ApiPath} from "../api/consts";

export default function avatarFileToSrc(filename?: string) {
    return filename ? ApiPath.USER.AVATAR.replace(':src', filename) : undefined;
}