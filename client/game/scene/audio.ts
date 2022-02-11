import assetManager from "../assetManager/AssetManager";
import {Events, subscribe} from "./events";
import sceneInfo from "./sceneInfo";


export default class Audio {

    static replayIfPlaying(audio: HTMLAudioElement) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    static play(audio: HTMLAudioElement) {
        if (!sceneInfo.sound) {
            return;
        }

        Audio.replayIfPlaying(audio);
    }

    static playGunShot() {
        const gunShotAudio = assetManager.getAudio('gunShotAudio');
        if (gunShotAudio && !sceneInfo.paused) {
            Audio.play(gunShotAudio);
        }
    }

    static playExplosion() {
        const explosionAudio = assetManager.getAudio('explosionAudio');
        if (explosionAudio) {
            Audio.play(explosionAudio);
        }
    }

    static init() {
        subscribe(Events.SHOOT, () => Audio.playGunShot());
        subscribe(Events.END_GAME, () => Audio.playExplosion());
    }
}