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