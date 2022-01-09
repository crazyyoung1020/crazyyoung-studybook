Function.prototype.myBind = function (context = window) {
    if (typeof this !== 'function') throw new Error('Error');
    let selfFunc = this;
    let args = [...arguments].slice(1);
    
    return function F () {
        // 因为返回了一个函数，可以 new F()，所以需要判断
        if (this instanceof F) {
            return new selfFunc(...args, arguments);
        } else  {
            // bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，所以需要将两边的参数拼接起来
            return selfFunc.apply(context, args.concat(arguments));
        }
    }
}