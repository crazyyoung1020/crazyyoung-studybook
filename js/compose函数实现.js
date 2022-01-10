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
    // 传入的函数列表的长度
    var len = args.length
    // 最后一个函数的下表
    var count = len - 1
    // 处理的结果
    var result
    return function f1(...args1) {
        // 用函数参数数组的末尾一个函数，计算出结果
        result = args[count].apply(this, args1)
        // 如果末尾函数，已经是仅剩的函数了，则直接返回计算结果
        if (count <= 0) {
            count = len - 1
            return result
        } else {
            // 如果末尾函数不是仅剩的函数，则拿着计算结果，继续去递归执行，知道最后一个函数为止
            count--
            return f1.call(null, result)
        }
    }
}