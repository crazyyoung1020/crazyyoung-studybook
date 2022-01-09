// lodash 迭代

var flow = function(funcs) {
    var length = funcs.length
    var index = length
    while (index--) {
        if (typeof funcs[index] !== 'function') {
            throw new TypeError('Expected a function');
        }
    }
    return function(...args) {
        var index = 0
        var result = length ? funcs[index].apply(this, args) : args[0]
        while (++index < length) {
            result = funcs[index].call(this, result)
        }
        return result
    }
}
var flowRight = function(funcs) {
    return flow(funcs.reverse())
}

// 递归

var compose = function(...args) {
    var len = args.length
    var count = len - 1
    var result
    return function f1(...args1) {
        result = args[count].apply(this, args1)
        if (count <= 0) {
            count = len - 1
            return result
        } else {
            count--
            return f1.call(null, result)
        }
    }
}