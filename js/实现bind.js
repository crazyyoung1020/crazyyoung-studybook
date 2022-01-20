
// 和apply和call相比，bind是返回了一个函数，而且还需要保留传进来的obj和参数，
// 那么我们一定要用到闭包,去将这些内容存在闭包内
// 这里bind方法的实现，需要借用以下apply或者call，如果不准使用apply和call，那我们就自己先实现myapply和mycall




Function.prototype.mybind = function (obj) {
    // 这里很多人喜欢加上this判断，判断this如果不是function那么要报错
    // 我其实是很有疑问的，如果this不是function，那这个mybind什么情况下会被执行呢？
    let context = obj || window; 
    var _this = this
    var args = Array.from(arguments).slice(1)
    // 这里返回一个函数
    return function F() {
      // 由于我们这里返回了一个函数，那么要考虑到外部会把我们这个函数当前做构造函数去执行new操作了
      // 如果外部new了我们这个函数，按照new一个函数的步骤，这个this目前应该指向这个新的实例
      // 那么这个this一定是F的实例，即满足下列条件
      if (this instanceof F) {
        // 那我们就用闭包内存储的_this当做构造函数，new一个实例出来返回出去
        return new _this(...args, ...arguments)
      }
      // 如果不是上面那种情况，那就是正常调用了这个函数，那么我们就执行闭包内的存储的_this方法，并改变函数内部this，指向调用mybind传进来的上下文
      return _this.apply(context, args.concat(...arguments))
    }
  }


function foo(b,c){
    console.log(this.a+b+c);
}

obj = {
    a:1
}

let newFoo = foo.mybind(obj,2,3) // 这一步执行完，其实就是得到了一个闭包F函数，并保存了传进来的obj和参数
newFoo();
let aaa = new newFoo();// 这里是刚才分析的new的那种场景，需要判断instanceof
// newFoo()