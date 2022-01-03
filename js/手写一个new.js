function myNew(Fn){
    let obj = {};
    obj.__proto__ = Fn.prototype;
    let arg = Array.from(arguments).slice(1);
    let result = Fn.apply(obj,arg);
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