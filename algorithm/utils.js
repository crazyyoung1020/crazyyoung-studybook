 

/**
 * 初始化点击事件方法
 * @param {String} fnName 
 * @param {String} inputValType
 */
export function initClick(fn, inputValType){
    document.getElementById('button').onclick= ()=>{
        let inputVal = document.getElementById('inputVal').value
        let result = fn(inputVal.split('').map(Number))
        document.getElementById('resultDiv').innerText = result
    }
}


