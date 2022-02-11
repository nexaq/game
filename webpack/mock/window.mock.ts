let win;

if (typeof window !== 'undefined' && typeof window.getComputedStyle === 'function') {
    win = window;
} else {
    win = {
        getComputedStyle() {
            return {
                // eslint-disable-next-line
                getPropertyValue() {},
            };
        },
        // eslint-disable-next-line
        addEventListener() {},

        scrollTo(x: number, y: number) {},
        performance: {
            now() {}
        },
        Image: class Image {
            addEventListener(type: string, callback: () => void) {}
        },
        Audio: class Audio {
            addEventListener(type: string, callback: () => void) {}
        },
        document: {
            querySelector(...args: any) {}
        },
        fake: true,
    };
}

export default win;
