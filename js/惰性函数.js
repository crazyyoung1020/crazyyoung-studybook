// 第一次申明addEvent变量后，会给它赋值一个function
// 后序再调用addEvent的时候，就直接走这个function了，不会再走判断了


var addEvent = (function () {
    if (document.addEventListener) {
        return function (type, element, fun) {
            element.addEventListener(type, fun, false);
        }
    }
    else if (document.attachEvent) {
        return function (type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    }
    else {
        return function (type, element, fun) {
            element['on' + type] = fun;
        }
    }
})();