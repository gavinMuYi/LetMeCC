interface TrackerInterface {
    _name: string;
    _options: object;
    _globelData: object;
    track(eventName: string, params: object): void;
}

export class Tracker implements TrackerInterface {
    _name: string;
    _options: object;
    _globelData: object;
    constructor(name: string, options: object, globelData: object) {
      this._name = name;
      this._options = options;
      this._globelData = globelData;
    };
    track(eventName, params) {
        console.log(this._globelData);
    }
}
