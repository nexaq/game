import {useEffect, useState} from "react";
import {useTypedSelector} from "../useTypedSelector";
import {userSelector} from "../../reducers/user/actions";

export default function useIsAuth() {
    const userFromRedux = useTypedSelector(userSelector);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        setIsAuthorized(!!userFromRedux)
    }, [userFromRedux]);

    return isAuthorized;
}