// let p1 = Promise.resolve('this is p1');
// let p2 = Promise.resolve(p1);
// let p3 = Promise.resolve(p2);

function test1() {
  console.log('this is test1');
  return Promise.resolve(test2());
}
function test2() {
  console.log('this is test2');
  return Promise.resolve('test2 is ok');
}
let p4 = Promise.resolve(test1());
// p4.then((res) => {
//   console.log(res);
// });
async function testPromise() {
  let a = await p4;
  console.log('a: ', a);
}

// 多个promise像这样嵌套，其实可以等同是一个promise，所以可以用一个await去处理
// koa里面的compose函数就利用了这个原理

// p3.then((res) => {
//   console.log(res);
// });

testPromise();
