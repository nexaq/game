import { useEffect, useState } from "react";

import { userSelector } from "../../reducers/user/selectors";
import { useTypedSelector } from "../useTypedSelector";

export default function useIsAuth() {
  const userFromRedux = useTypedSelector(userSelector);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    setIsAuthorized(!!userFromRedux);
  }, [userFromRedux]);

  return isAuthorized;
}
