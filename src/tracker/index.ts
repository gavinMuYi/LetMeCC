import { TrackerData } from './trackerData';

interface TrackerInterface {
    _name: string;
    _cipher: string;
    _options: object;
    _globelData: object;
    track(eventName: string, params: object, reqType: string): void;
    systemEvents(): void;
}

export class Tracker extends TrackerData implements TrackerInterface {
    _name: string;
    _cipher: string;
    _options: object;
    _globelData: object;
    constructor(name: string, cipher: string,  options: object, globelData: object) {
        super();
        if (!name || !cipher) {
            throw new Error(`
                ${name ? '' : 'tracker name is required'}
                ${cipher ? '' : 'tracker cipher is required'}
            `);
        }
        this._name = name;
        this._cipher = cipher;
        this._options = options;
        this._globelData = globelData;
        this.systemEvents();
    };
    track(eventName, params, reqType = 'img') {
        const pageData = this._globelData['get']();
        let queryParams = {
            type: 'track',
            cipher: this._cipher,
            pageParams: pageData,
            trackerParams: this._trackerData,
            eventParams: params
        }
        console.log(eventName, queryParams, reqType);
    };
    systemEvents() {
        if (!this._options['prevent_pageview']) {
            this.track('$pageview', {});
        }
        if (!this._options['prevent_pageclose']) {
            this.track('$pageclose', {}, 'beacon');
        }
    };
}
