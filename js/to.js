/**
 * @description 解构promise返回结果
 * @param {*} promise
 * @returns
 */
const to = (promise) => {
  debugger;
  const p = promise.then((data) => [null, data]).catch((err) => [err]);
  window.ppp = p;
  return p;
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('111');
  });
});

const fetch = async () => {
  const [err, data] = await to(p1);
  console.log('err', err);
  console.log('data', data);
};

fetch();
