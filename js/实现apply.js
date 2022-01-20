
Function.prototype.myapply = function (obj,args){
    let context = obj || window;
    let fn = Symbol('fn');
    context[fn] = this;
    let result = context[fn](...args);
    delete context[fn]
    return result;
}

function foo(b,c){
    console.log(this.a + b + c)
}

let obj = {a:1}

foo.myapply(obj,[2,3])