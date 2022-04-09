let obj = {
  foo:{
    bar:1
  }
}

let puppet = new Proxy(obj,{
  get(target, key){
    let res = Reflect.get(target, key)
    console.log(`读取对象${target}的属性${key}的值：${res}`)

    return res;
  },
  set(target, key, value){
    let res = Reflect.set(target, key, value);
    console.log(`设置对象${target}的属性${key}的值：${value}`)
    return res;
  }
})