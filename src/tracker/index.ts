interface TrackerInterface {
    _name: string;
    _cipher: string;
    _options: object;
    _globelData: object;
    track(eventName: string, params: object): void;
}

export class Tracker implements TrackerInterface {
    _name: string;
    _cipher: string;
    _options: object;
    _globelData: object;
    constructor(name: string, cipher: string,  options: object, globelData: object) {
      this._name = name;
      this._cipher = cipher;
      this._options = options;
      this._globelData = globelData;
    };
    track(eventName, params) {
        const pageData = this._globelData['get']();
        let queryParams = {
            cipher: this._cipher,
            page: pageData,
            track: this._options,
            event: params
        }
        console.log(eventName, queryParams);
    }
}
