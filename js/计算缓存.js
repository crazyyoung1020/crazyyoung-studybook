/**
 * 缓存器策略计算阶乘
 * @param val
 * @returns {factorial}
 */
function factorial(val) {
  var arr = [];

  return function (val) {
    //容错处理
    if (typeof val === "number" && val > 0) {
      console.log("请输入一个正数！");
    }
    //缓存判断
    if (val in arr) {
      console.log("这次是从缓存中取数的：");
      return arr[val];
    }

    var result = val;

    //计算阶乘
    for (var i = val; i > 0; i--) {
      result *= i;
    }

    //缓存
    arr[val] = result;

    return result;
  };
}
