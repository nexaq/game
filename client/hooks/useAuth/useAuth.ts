import {useEffect} from "react";
import {checkAuth} from "../../reducers/user/actions";

export default function useAuth() {
    useEffect(() => {
        checkAuth();
    }, [])
}