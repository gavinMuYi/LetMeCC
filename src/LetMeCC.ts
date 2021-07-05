import { Tracker } from './tracker/index';
import { globelData } from './globel/data';

interface LetMeCCInterface {
    _tracks: object;
    _globelData: object;
    init(name: string, cipher: string, options: object): void;
    track(name: string, eventName: string, params: object, reqType?: string): void;
    setTrackData(name: string, params: object): void;
    reset(): void;
}

class LetMeCC implements LetMeCCInterface {
    _tracks: object;
    _globelData: object;
    constructor () {
        this._tracks = {};
        this._globelData = new globelData();
    };
    init (name, cipher, options) {
        this._tracks[name] = new Tracker(name, cipher, options, this._globelData);
    };
    track (name, eventName, params, reqType) {
        if (this._tracks[name]) {
            this._tracks[name].track(eventName, params, reqType);
        } else {
            throw new Error(`Tracker ${name} does not exist`);
        }
    };
    setTrackData (name, params) {
        this._tracks[name].set(params);
    };
    reset () {
        this._globelData && this._globelData['init']();
    }
}

declare global {
    interface Window { LetMeCC: any; LetMeCCInstance: any }
}

window.LetMeCCInstance = new LetMeCC();

window.LetMeCC = (functionName, ...args) => {
    try {
        window.LetMeCCInstance[functionName](...args);
    } catch (e) {
        console.log(e);
    }
}
