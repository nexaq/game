import { useEffect, useRef, useState } from "react";

/**
 * Срабатывает только если страница открылась на самом вверху
 * И только при (перезагрузки/первом открытии) страницы!
 * Загрузка по умолчанию длится 1500 мс
 */
export default function useFakeLoading(delay = 1500): boolean {
  // todo: куда нибудь в redux или какой нибудь storage переместить
  const firstTimeOpenedRef = useRef(true);

  const [isLoading, setLoading] = useState(firstTimeOpenedRef.current);
  const off = () => setLoading(false);

  useEffect(() => {
    const scrollTop = window.pageYOffset;

    if (!firstTimeOpenedRef.current || scrollTop > 0) {
      off();
      return undefined;
    }

    // юзаем setTimout из-за странного поведения google chrome
    // бывает сам скроллит вниз после загрузки страницы :(
    setTimeout(() => window.addEventListener("scroll", off));

    firstTimeOpenedRef.current = false;
    const timeoutId = setTimeout(off, delay);

    return () => {
      setLoading(false);
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", off);
    };
  }, []);

  return isLoading;
}
