import { useEffect } from "react";

import usePrevious from "../usePrevious/usePrevious";

/**
 * Вынес из useRequest в отдельный хук
 * Делать что-то после каждой загрузки
 * так как загрузка (showLoading из useRequest)
 * может быть с delay
 */
export default function useAfterEachLoading(
  isLoading: boolean,
  callback: () => void
) {
  const prevIsLoading = usePrevious(isLoading);

  useEffect(() => {
    if (prevIsLoading) {
      callback();
    }
  }, [isLoading]);
}
