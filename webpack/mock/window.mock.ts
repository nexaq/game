/* eslint-disable import/no-mutable-exports, class-methods-use-this,@typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
let win;

if (
  typeof window !== "undefined" &&
  typeof window.getComputedStyle === "function"
) {
  win = window;
} else {
  win = {
    getComputedStyle() {
      return {
        getPropertyValue() {},
      };
    },
    addEventListener() {},

    scrollTo(x: number, y: number) {},
    performance: {
      now() {},
    },
    Image: class Image {
      addEventListener(type: string, callback: () => void) {}
    },
    Audio: class Audio {
      addEventListener(type: string, callback: () => void) {}
    },
    document: {
      querySelector(...args: any) {},
    },
    fake: true,
  };
}

export default win;
