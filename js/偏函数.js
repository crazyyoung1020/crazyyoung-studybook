// 偏函数
function partial(fn){
    // 第一步传入的部分参数
    let args = [].slice.call(arguments,1);
    // 第一步接受参数后只是返回一个function出去
    return function(){
        // 第二步传入的参数
        let params = [].slice.call(arguments);
        // 将参数合并
        let _args = [...args,...params];
        // 执行原始函数
        return fn.apply(this, _args);
    }
}


function add(x,y,z){
    return x+y+z;
}

let a = partial(add,2,3)
