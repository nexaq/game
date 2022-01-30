let localStorage: Pick<Storage, 'getItem' | 'setItem'>;

if (typeof window !== 'undefined' && typeof window.getComputedStyle === 'function') {
    localStorage = window.localStorage;
} else {
    localStorage = {
        // eslint-disable-next-line
        setItem(key: string, value: string) {},
        // eslint-disable-next-line
        getItem(key: string) {
            return '';
        },
    };
}

export default localStorage;
