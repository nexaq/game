import {Events, trigger} from "../scene/events";

export default new class AssetManager {
    countLoaded: number = 0;

    audios: Record<string, HTMLAudioElement> = {};
    images: Record<string, HTMLImageElement> = {};

    countAssets() {
        const {audios, images} = this;
        return Object.keys(audios).length + Object.keys(images).length;
    }

    isAllLoaded() {
        const {countLoaded} = this;
        return countLoaded === this.countAssets();
    }

    applyCallback() {
        if (this.isAllLoaded()) {
            trigger(Events.ASSETS_LOADED);
        }
    }

    loadImage(name: string, src: string) {
        const image = new window.Image();
        image.src = src;
        image.onload = () => {
            this.countLoaded++;
            this.applyCallback();
        };
        this.images[name] = image;
    }

    loadAudio(name: string, src: string, volume = 1) {
        const audio = new window.Audio();
        audio.src = src;
        audio.volume = volume;
        audio.addEventListener('loadeddata', () => {
            this.countLoaded++;
            this.applyCallback();
        })
        this.audios[name] = audio;
    }

    getImage(name: string): HTMLImageElement {
        return this.images[name];
    }

    getAudio(name: string): HTMLAudioElement {
        return this.audios[name];
    }
}