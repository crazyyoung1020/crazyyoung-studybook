// 重要思想有以下两点

// 1. 利用this隐式绑定指向调用者的原理，在obj下动态的加上foo方法，执行完之后再删除
// 2. 我们可以将mycall方法挂载到Function的原型对象上，这里每一个函数实例都能够调用mycall方法
// 3. 在mycall方法里可以通过当前的this获取到调用mycall的函数

Function.prototype.mycall = function (obj){
    let context = obj || window; // 传入进来的，要将this指向的obj对象
    let args = Array.from(arguments).slice(1);// 传进来的参数
    let fn = Symbol('fn');// 定义一个方法名，只是用这个名字挂到obj下面而已，名字是什么不重要，所以我们用Symbol定义以免跟obj下的原有属性冲突
    context[fn] = this;// 在传进来的对象下面把我们实际要调用的方法挂上
    let result = context[fn](...args) // 调用context下的fn方法，这时实际就是执行了真正的函数方法，内部的this已经隐式的指向了context
    delete context[fn];// 那到结果后，我们将这个方法删除
    return result;
}


function foo(b,c){
    console.log(this.a+b+c);
}

obj = {
    a:1
}
foo.mycall(obj,2,3)

