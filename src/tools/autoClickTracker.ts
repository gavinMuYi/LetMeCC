// var AutoClickTracker = function (options) {
//     var that = this;
//     that._options = options;
//     !options.prevent && that.init();
// };

// AutoClickTracker.prototype = {
//     init: function () {
//         var that = this;
//         document.addEventListener('click', (e) => {
//             that.checkEvent(e) && that.report(that.assembleParams(e));
//         });
//     },
//     checkEvent: function (e) {
//         var opt = this._options;
//         if (!opt.attrs) {
//             opt.attrs = [];
//         }
//         var validate = true;
//         var checkAttrs = function (attrs) {
//             var attrValidate = false;
//             var flag = 0;
//             for (flag; flag < attrs.length; flag++) {
//                 opt.attrs.indexOf(attrs[flag]) > -1 && (attrValidate = true);
//             }
//             return attrValidate;
//         };
//         validate = validate && opt.elements.indexOf(e.target.nodeName) > -1;
//         validate = validate || checkAttrs(e.target.attributes);
//         validate = validate && (opt.pageFilter ? opt.pageFilter() : true);
//         validate = validate && (opt.elementFilter ? opt.elementFilter(e.target) : true);
//         return validate;
//     },
//     assembleParams: function (e) {
//         // var checkBro = function (mySelect, bros, myEle) {
//         //     var index = 0;
//         //     var location = 0;
//         //     var hasSameBro = 0;
//         //     for (index; index < bros.length; index++) {
//         //         var ele = bros[index];
//         //         ele === myEle && (location = index);
//         //         var eleClassName = ele.className.baseVal !== undefined ? ele.className.baseVal : ele.className;
//         //         var select = ele.localName
//         //             + (ele.id ? '#' + ele.id : '')
//         //             + (eleClassName ? '.' + eleClassName.replace(new RegExp(/( )/g), '.') : '');
//         //         select === mySelect && (hasSameBro++);
//         //     }
//         //     return {
//         //         hasSameBro: Boolean(hasSameBro > 1),
//         //         location
//         //     };
//         // };
//         // var getSelecter = function (childrenPath, ele) {
//         //     var eleClassName = ele.className.baseVal !== undefined ? ele.className.baseVal : ele.className;
//         //     var select = ele.localName
//         //         + (ele.id ? '#' + ele.id : '')
//         //         + (eleClassName ? '.' + eleClassName.replace(new RegExp(/( )/g), '.') : '');
//         //     var check = checkBro(select, ele.parentElement.children, ele);
//         //     if (check.hasSameBro) {
//         //         select = select + ':nth-child(' + check.location + ')';
//         //     }
//         //     if (ele.parentElement.nodeName === 'BODY') {
//         //         return ele.parentElement.localName + '~' + select + (childrenPath ? '~' + childrenPath : '');
//         //     } else {
//         //         return getSelecter(select + (childrenPath ? '~' + childrenPath : ''), ele.parentElement);
//         //     }
//         // };
//         var getSelecter = function(el) {
//             if (!(el instanceof Element)) 
//                 return;
//             var path = [];
//             var unfinish = false;
//             while (el && el.nodeType === Node.ELEMENT_NODE && el.nodeName !== 'BODY') {
//                 var selector = el.nodeName.toLowerCase();
//                 if (el.id) {
//                     selector += '#' + el.id;
//                     path.unshift(selector);
//                     break;
//                 } else {
//                     var sib = el, nth = 1;
//                     while (sib = sib.previousElementSibling) {
//                         if (sib.nodeName.toLowerCase() == selector)
//                            nth++;
//                     }
//                     if (nth != 1) {
//                         selector += ":nth-of-type("+nth+")";
//                     }
//                     var elClassName = el.className.baseVal !== undefined ? el.className.baseVal : el.className;
//                     selector += elClassName ? '.' + elClassName.replace(new RegExp(/( )/g), '.') : '';
//                 }
//                 path.unshift(selector);
//                 if (!el.parentNode) {
//                     unfinish = true;
//                 }
//                 el = el.parentNode;
//             }
//             path.unshift(unfinish ? "body..." : "body");
//             return path.join(" > ");
//         };
//         var ele = e.target;
//         var customerParams = (this._options.customProperty ? this._options.customProperty(ele) : {}) || {};
//         return {
//             ...customerParams,
//             elementType: ele.nodeName,
//             elementClassName: (ele.className.baseVal !== undefined ? ele.className.baseVal : ele.className) || '',
//             elementID: ele.id || '',
//             elementContent: ele.innerText || '',
//             elementUrl: ele.href || '',
//             elementPath: getSelecter(ele),
//             $url: document.location.href
//         };
//     },
//     report: function (params) {
//         qidianDA_WEBSDK('track', 'autoClick', params);
//     }
// };

interface AutoClickTrackerInterface {
}

export class AutoClickTracker implements AutoClickTrackerInterface {
    constructor() {

    }
};
