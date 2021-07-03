import { Greeter } from './test';
   
let greeter = new Greeter("Hansen");
alert(greeter.greet());

class LetMeCC {
    _name: string;
    _options: object;
    constructor (name: string) {
        this._name = name;
    };
    init (options: object) {
        this._options = options;
    };
}

declare global {
    interface Window { LetMeCC: any; }
}

window.LetMeCC = LetMeCC;
