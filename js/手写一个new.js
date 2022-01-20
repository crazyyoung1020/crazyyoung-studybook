function myNew(Fn){
    let obj = {};// 第一步，开辟内存空间，声明一个新的空对象
    obj.__proto__ = Fn.prototype; // 第二步，将新对象的__proto__指向Fn的原型对象，即将obj放到Fn的原型链上
    let arg = Array.from(arguments).slice(1);
    let result = Fn.apply(obj,arg);// 第三部，改变Fn内部的this指针，指向这个新的对象，并执行Fn构造函数，为obj增加属性
    // 第四部，判断当前的结果是否为对象，即构造函数内是否有返回对象，如果有则直接返回，如果没有则返回这个新的obj
    if(Object.prototype.toString.call(result) === '[object Object]'){
      return result
    }
    return obj;
  }
  
  function Fn(options){
    this.a = options && options.a;
    this.b = options && options.b;
    this.test = function (){
      console.log('a',this.a);
      console.log('b',this.b)
    }
    // return {}  这里如果return一个引用类型的话，上面无论给this绑定什么都没用了，新建的对象直接就是{}
  }

  let a = myNew(Fn,{a:1,b:1});