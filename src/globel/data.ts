import uuid from '../utils/uuid';

interface globelDataInterface {
    init():void;
    get(): object;
    [propName: string]: any;
}

export class globelData implements globelDataInterface {
    $version: '1.0.0';
    constructor() {
        this.init();
    };
    init() {
        this['$url'] = document.location.href;
        this['$title'] = document.title;
        this['$referrer'] = document.referrer;
        this['$pageInitTime'] = new Date();
        this['$pageId'] = uuid.create('pid');
    };
    get() {
        return {
            $version: this['$version'],
            $url: this['$url'],
            $title: this['$title'],
            $referrer: this['$referrer'],
            $pageInitTime: this['$pageInitTime'],
            $pageId: this['$pageId']
        }
    }
}
