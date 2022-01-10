function add(x,y,z){
    return x+y+z
}

// 手写一个add的柯里化
// function curryAdd(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }

const currying = function(fn) {
    // fn需要的参数个数
    const len = fn.length
    // args是这一步已经传入的参数
    let args = [].slice.call(arguments,1);
    // 返回一个函数接收剩余参数
    return function () {
        // params代表这一步添加的参数
        let params = [].slice.call(arguments);
        // 拼接已经接收和新接收的参数列表
        let _args = [...args, ...params]
        // 如果已经接收的参数个数还不够，用现有的参数当作初始参数去返回一个新函数，来接收剩余参数
        if (_args.length < len) {
            return currying.call(this, fn, ..._args)
            // return currying(fn,..._args)
        }
       // 参数全部接收完调用原函数
        return fn.apply(this, _args)
        // return fn(..._args)
    }
}


let curryadd = currying(add);