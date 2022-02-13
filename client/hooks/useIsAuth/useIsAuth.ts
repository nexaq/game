import { authSelector } from "client/reducers/user/selectors";

import { useTypedSelector } from "../useTypedSelector";

export default function useIsAuth() {
  const userFromRedux = useTypedSelector(authSelector);

  return !!userFromRedux;
}
