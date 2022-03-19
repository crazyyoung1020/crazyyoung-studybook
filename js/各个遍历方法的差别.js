let arr = [1,2,3,2,1,2,3,4,5,7,8,9,7]
let map = new Map();
map.set('a',1);
map.set('b',2);

let obj = {a:1,b:2,c:3};
let obj1 = Object.create(obj);
obj1.e = 2;
obj1.d = 3;


function traverse(){
  // while循环是可以break、continue的
  // while(arr.length>0){
  //   let temp = arr.shift();
  //   if(temp === 3){
  //     continue;
  //   }
  //   console.log(temp);
  // }

  // for in 循环，遍历对象
  // for in顺序不一定，如果有整数key，以key从小到大遍历，但是有'-1'这种，会在最后处理，
  // 其他字符串会以安装到对象的顺序类执行
  // 也可以使用break、continue
  // 会遍历继承的属性，先遍历自己的属性，再遍历继承的属性
  for(let key in obj1){
    if(key === 'c'){
      continue;
    }
    console.log(key, obj1[key]);
  }

  // for of,可以遍历任何带有iterator的对象,数组、map、set、arguments、类数组等
  // 当遍历数组时，直接遍历出value，遍历map时，可以遍历出[key,value],也可以遍历出entry，entry为[key,value]
  // for(let [key,value] of map){
  //   console.log(key,value);
  // }


  // for(let value of arr){
  //   console.log(value);
  // }

  // // Array.map方法,遍历数组，并且传入每一项，返回的内容会放入一个新的数组，不会修改原数组
  // let arrNew = arr.map((item)=>{
  //   return item+3;
  // })
  // console.log(arrNew)

  // // 还能这样，除了传入一个回调函数之外，还能传入一个对象，然后回调函数里面的this就指向他
  // var a = [0, 1, 2].map(function (e) {
  //     return this[e];
  // }, arr)
  // console.log(a)

  // forEach,很基础的一个遍历方法，但只是拿到每一项之后可以做处理，有点for循环的语法糖的意思
  // 凡是forEach和map、filter这些，都不能break和continue
  // forEach没有返回值
  // arr.forEach((item)=>{
  //   console.log(item);
  // })

  // filter,数组过滤方法，通过返回的boolean值，去判断是否要过滤当前项，最终返回新数组
  // 回调函数里也是可以有三个参数，item、index、arr
  // 也是除了传入回调函数之外，还能传入一个对象，用于指定函数内部的this指针指向
  // let a = arr.filter((item)=>{
  //   if(item%2 == 0){
  //     return true
  //   }
  // })
  // console.log(a)

  // some,用于判断整个数组的所有项，是否能找出一个满足指定条件，满足则返回true；
  // let hasValueOver8 = arr.some((item)=>{
  //   return item>8
  // })
  // console.log(hasValueOver8);

  // every,刚好和some相反，要每一项都满足条件，才会返回true，否则都是false

  // reduce,累加
  // let a = [1,2,3,4].reduce((sum,cur)=>{
  //   return sum + cur
  // },5)
  // console.log(a);
}



traverse();