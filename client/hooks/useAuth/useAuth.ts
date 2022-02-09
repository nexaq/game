import {useEffect} from "react";
import {checkAuth} from "client/reducers/user/actions";
import {useDispatch} from "react-redux";

export default function useAuth(redirect: boolean) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth(redirect))
    }, [])
}