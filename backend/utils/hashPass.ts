import {sha256} from "js-sha256";

export default function hashPass(password: string) {
    return sha256(password);
}