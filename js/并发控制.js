let tasks = new Array(10).fill('').map((item, i)=> `this is ${i}`);

function request(data){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(data);
      resolve('111')
    },1000)
  })
}
let result = asyncPool_es6(3,tasks,request);
result.then((res)=>{
  console.log(res);
})


// /**
//  * es6版本
//  * @param { Number } poolLimit 
//  * @param { Array } array 
//  * @param { Function } iteratorFn 
//  * @returns 
//  */

function asyncPool_es6(limit, tasks, handleFun) {
  let i = 0;
  // 结果数组
  const res = [];
  // 并发任务数组
  const pool = [];
  const recursion = function() {
    // 计数，到最后一个任务了则停止递归
    if (i === tasks.length) {
      return Promise.resolve();
    }
    const item = tasks[i++];
    // 执行当前任务，并将promise放入结果数组里
    // 这里源码是用Promise.resolve去包装了以下，但其实不用，因为我们本来handleFun就要求是一个会返回promise的方法
    // const p = Promise.resolve().then(() => handleFun(item));
    const p = handleFun(item)
    res.push(p);

    let r = Promise.resolve();

    // 如果并发量小于任务数，才需要做并发控制
    if (limit <= tasks.length) {
      // 任务结束后，将任务从并发池中删除
      const e = p.then(() => pool.splice(pool.indexOf(e), 1));
      // 将任务方法并发池
      pool.push(e);
      if (pool.length >= limit) {
        // 如果并发池达到并发上限了，停止任务执行，等并发池内的有任务结束才继续
        r = Promise.race(pool);
      }
    }

    return r.then(() => recursion());
  };
  return recursion().then(() => Promise.all(res));
}


// /**
//  * es7版本
//  * @param { Number } poolLimit 
//  * @param { Array } array 
//  * @param { Function } iteratorFn 
//  * @returns 
//  */
// async function asyncPool_es7(poolLimit, array, iteratorFn) {
//   const ret = [];
//   const executing = [];
//   for (const item of array) {
//     const p = Promise.resolve().then(() => iteratorFn(item, array));
//     ret.push(p);

//     if (poolLimit <= array.length) {
//       const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//       executing.push(e);
//       if (executing.length >= poolLimit) {
//         await Promise.race(executing);
//       }
//     }
//   }
//   return Promise.all(ret);
// }


// 模拟异步请求
// const request = (url) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`任务 ${url.padEnd(10, ' ')}完成`)
//     }, 1000)
//   })
// }

// /**
//  * 并发控制函数
//  * @param {*} tasks
//  * @param {*} max
//  */
// async function myAsyncPool(tasks = [], max = 3) {
//   // 正在执行的任务数组
//   let pool = []
//   for (let i = 0; i < tasks.length; i++) {
//     // 生成异步任务
//     const task = request(tasks[i])
//     // 添加到正在执行的任务数组
//     pool.push(task)
//     task.then((data) => {
//       // 当任务执行完毕, 将其从正在执行任务数组中移除
//       console.log(`${data}; 当前并发数: ${pool.length}`)
//       pool.splice(pool.indexOf(task), 1)
//     })

//     // 当并发池满了, 就先去执行并发池中的任务, 有任务执行完成后, 再继续循环
//     if (pool.length === max) {
//       await Promise.race(pool)
//     }
//   }
// }
// const tasks = new Array(10).fill('').map((task, i) => `url - ${i + 1}`)
// myAsyncPool(tasks, 3)