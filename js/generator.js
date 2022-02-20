// function async1(){
//   setTimeout(()=>{
//     return 10
//   },1000)
// }

// function* genFun(){
//   let a = yield async1()
//   console.log(a);
// }

// let gen = genFun();



function testA() {
  setTimeout(() => {
    let data = 'aa'
    iterator.next(data)
  }, 1000);
}
function testB(data) {
  setTimeout(() => {
    iterator.next(data+'bb')
  }, 1000);
}
function testC(data) {
  setTimeout(() => {
    iterator.next(data+'cc')
  }, 1000);
}
function* genFun() {
  let a = yield testA()
  console.log(a);
  let b = yield testB(a)
  console.log(b);
  let c = yield testC(b)
  console.log(c);
}
let iterator = genFun()
iterator.next()