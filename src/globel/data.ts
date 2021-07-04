interface globelDataInterface {
    reset();
    [propName: string]: any;
}

export class globelData implements globelDataInterface {
    [propName: string]: any;
    constructor() {
        this._page_init_time = new Date();
    };
    reset() {
        this._page_init_time = new Date();
    }
}
