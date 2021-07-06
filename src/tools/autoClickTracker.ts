interface AutoClickTrackerInterface {
    _options: object;
    checkEvent(e: any): boolean;
    assembleParams(e: any): object;
}

export class AutoClickTracker implements AutoClickTrackerInterface {
    _options: object;
    constructor(options: object, track: any) {
        this._options = options;
        document.addEventListener('click', (e) => {
            this.checkEvent(e) && track('$autoClick', this.assembleParams(e));
        });
    };
    checkEvent(e: any) {
        let opt = this._options;
        if (!opt['attrs']) {
            opt['attrs'] = [];
        }
        let validate = true;
        let checkAttrs = function (attrs) {
            let attrValidate = false;
            let flag = 0;
            for (flag; flag < attrs.length; flag++) {
                opt['attrs'].indexOf(attrs[flag]) > -1 && (attrValidate = true);
            }
            return attrValidate;
        };
        validate = validate && opt['elements'].indexOf(e.target.nodeName) > -1;
        validate = validate || checkAttrs(e.target.attributes);
        validate = validate && (opt['pageFilter'] ? opt['pageFilter']() : true);
        validate = validate && (opt['elementFilter'] ? opt['elementFilter'](e.target) : true);
        return validate;
    };
    assembleParams(e: any) {
        let getSelecter = function(el) {
            if (!(el instanceof Element)) 
                return;
            let path = [];
            let unfinish = false;
            while (el && el.nodeType === Node.ELEMENT_NODE && el.nodeName !== 'BODY') {
                let selector = el.nodeName.toLowerCase();
                if (el.id) {
                    selector += '#' + el.id;
                    path.unshift(selector);
                    break;
                } else {
                    let sib = el, nth = 1;
                    while (sib = sib.previousElementSibling) {
                        if (sib.nodeName.toLowerCase() == selector)
                           nth++;
                    }
                    if (nth != 1) {
                        selector += ":nth-of-type("+nth+")";
                    }
                    let elClassName = el.className.baseVal !== undefined ? el.className.baseVal : el.className;
                    selector += elClassName ? '.' + elClassName.replace(new RegExp(/( )/g), '.') : '';
                }
                path.unshift(selector);
                if (!el.parentNode) {
                    unfinish = true;
                }
                el = el.parentNode;
            }
            path.unshift(unfinish ? "body..." : "body");
            return path.join(" > ");
        };
        let ele = e.target;
        let customerParams = (this._options['customProperty'] ? this._options['customProperty'](ele) : {}) || {};
        return {
            ...customerParams,
            elementType: ele.nodeName,
            elementClassName: (ele.className.baseVal !== undefined ? ele.className.baseVal : ele.className) || '',
            elementID: ele.id || '',
            elementContent: ele.innerText || '',
            elementUrl: ele.href || '',
            elementPath: getSelecter(ele),
            $url: document.location.href
        };
    };
};
