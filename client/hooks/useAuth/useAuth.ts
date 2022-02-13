import { useTypedSelector } from "client/hooks/useTypedSelector";
import { checkAuth } from "client/reducers/user/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import history from "../../components/CustomBrowserRouter/history";
import { ROUTES } from "../../routes";
import { authSelector } from "../../reducers/user/selectors";

export default function useAuth(redirect: boolean) {
  const dispatch = useDispatch();

  const isAuth = useTypedSelector(authSelector);

  useEffect(() => {
    // не посылать больше запросов если
    // уже известно что пользователь
    // не залогинен
    if (isAuth !== false) {
      dispatch(checkAuth(redirect));
    } else if (redirect) {
      setTimeout(() => history.push(ROUTES.SIGN_IN.INDEX));
    }
  }, []);

  return isAuth;
}
