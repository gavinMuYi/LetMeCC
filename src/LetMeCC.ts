import { Tracker } from './tracker/index';
import { globelData } from './globel/data';

interface LetMeCCInterface {
    _tracks: object;
    _globelData: object;
    init(name: string, options: object): void;
    track(name: string, eventName: string, options: object): void;
    reset();
}

class LetMeCC implements LetMeCCInterface {
    _tracks: object;
    _globelData: object;
    constructor () {
        this._tracks = {};
        this._globelData = new globelData();
    };
    init (name: string, options: object) {
        this._tracks[name] = new Tracker(name, options, this._globelData);
    };
    track (name: string, eventName: string, params: object) {
        if (this._tracks[name]) {
            this._tracks[name].track(eventName, params);
        } else {
            throw new Error(`Tracker ${name} does not exist`);
        }
    };
    reset () {
        this._globelData && this._globelData['reset']();
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
