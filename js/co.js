function co(genFun) {
  // 通过调用生成器函数得到一个生成器
  var gen = genFun();
  return function (fn) {
    next();
    function next(err, res) {
      if (err) return fn(err);
      // 将res传给next，作为上一个yield的返回值
      var ret = gen.next(res);
      // 如果函数还没迭代完，就继续迭代
      if (!ret.done) return gen.next(null, ret.value);
      // 返回函数最后的值
      fn && fn(null, res);
    }
  };
}
function asyncFun1() {
  setTimeout(() => {
    console.log('asyncFun1')
    return 'asyncFun1'
  }, 3000);
}
function asyncFun2(a) {
  setTimeout(() => {
    console.log(a + 'fun2');
    return  a + 'fun2'
  }, 2000);
}
function asyncFun3(b) {
  setTimeout(() => {
    console.log(b + 'fun3');
    return  b + 'fun3'
  }, 1000);
}

let coFun = co(function* () {
  var a = yield asyncFun1();
  var b = yield asyncFun2(a);
  var c = yield asyncFun3(b);
  console.log(c);
  // do somethin with c
});

coFun()
