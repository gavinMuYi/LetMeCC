interface TrackerDataInterface {
    _trackerData: object;
    set(params: object): void;
}
export class TrackerData implements TrackerDataInterface {
    _trackerData: object;
    constructor() {
        this._trackerData = {};
    };
    set(params) {
        this._trackerData = {
            ...this._trackerData,
            ...params
        };
    }
}
