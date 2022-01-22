import {useEffect, useState} from "react";

// todo: куда нибудь в redux или какой нибудь storage переместить
let firstTimeOpened = true;
/**
 * Срабатывает только если страница открылась на самом вверху
 * И только при (перезагрузки/первом открытии) страницы!
 * Загрузка по умолчанию длится 1500 мс
 */
export default function useFakeLoading(delay = 1500): boolean {
    const [isLoading, setLoading] = useState(firstTimeOpened);
    const off = () => setLoading(false);

    useEffect(() => {
        const scrollTop = window.pageYOffset;

        if (!firstTimeOpened || scrollTop > 0) {
            off();
            return;
        }

        // юзаем setTimout из-за странного поведения google chrome
        // бывает сам скроллит вниз после загрузки страницы :(
        setTimeout(() => window.addEventListener('scroll', off));

        firstTimeOpened = false;
        const timeoutId = setTimeout(off, delay);

        return () => {
            setLoading(false);
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', off);
        }
    }, []);

    return isLoading;
}