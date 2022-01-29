import {sha256} from "js-sha256";

export default function salt(password: string) {
    return sha256(password);
}