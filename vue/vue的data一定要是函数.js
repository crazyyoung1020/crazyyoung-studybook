// 创建一个简单的构建函数
var MyComponent = function(options) {
    // ... code here
    this.$data = this.data(options||[]);
}
// 原型链对象上设置data数据，为里为Object
MyComponent.prototype.data = function(options){
    return {
      name: options.name || 'name is null',
      age: options.age || 'age is null',
    }
};

let options1 = {
    name:'小明',
    age:20
}
let options2 = {
    name:'小红',
    age:30
}
// 创建两个实例:小明，小红
var xiaoming = new MyComponent(options1)
var xiaohong = new MyComponent(options2)
// 默认状态下小明和小红的年龄一样
// console.log(xiaoming.$data.age === xiaohong.$data.age) // true
// 改变一下小明的年龄
// xiaoming.$data.age = 30;
// 打印下小红的年龄，发现因为必变了小明的年龄，结果造成小红的年龄也变了
console.log('xiaoming.$data.age:',xiaoming.$data.age)//30
console.log('xiaohong.$data.age:',xiaohong.$data.age) // 20


// // -----------------------------------------------------------------------------
// // 这是有问题的版本
// // 创建一个简单的构建函数
// var MyComponent = function() {
//     this.$data = this.data;
// }
// // 原型链对象上设置data数据，为里为Object
// MyComponent.prototype.data = {
//   name: 'abc',
//   age: 20,
// }
// // 创建两个实例:小明，小红
// var xiaoming = new MyComponent()
// var xiaohong = new MyComponent()
// // 默认状态下小明和小红的年龄一样
// console.log(xiaoming.data.age === xiaohong.data.age) // true
// // 改变一下小明的年龄
// xiaoming.data.age = 30;
// // 打印下小红的年龄，发现因为改变了小明的年龄，结果造成小红的年龄也变了
// console.log(xiaoming.data.age)// 30
// console.log(xiaohong.data.age) // 30