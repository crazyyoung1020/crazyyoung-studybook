/**
 * @description 插入排序
 * @param {Array} arr  输入数组
 * @return {Array} 返回一个排序好的数组
 */

// 未看答案前，第一遍通过的代码
// function insertionSort(arr){
//     let resultArr = []
//     resultArr[0] = arr[0]
//     for(let i=1;i<arr.length;i++){
//         let preInsert = arr[i]
//         if(preInsert <= resultArr[0]){// 比结果数组最小的还小，往前方
//             resultArr.unshift(preInsert)
//         }else if(preInsert >= resultArr[resultArr.length -1]){ // 比结果数组最大的还大，往后放
//             resultArr.push(preInsert)
//         }else{ // 处于中间，则遍历结果数组，找待插入项的位置
//             for(let j=0;j<resultArr.length;j++){
//                 if(preInsert > resultArr[j] && preInsert < resultArr[j+1]){
//                     resultArr.splice(j+1,0,preInsert)
//                     break
//                 }
//             }
//         }
//     }
//     return resultArr
// }


// 菜鸟教程给的示例
// 该示例是待插入项，从后往前比较，找对应的位置
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}



document.getElementById('button').onclick= ()=>{
    let inputVal = document.getElementById('inputVal').value
    let result = insertionSort(inputVal.split(',').map(Number))
    document.getElementById('resultDiv').innerText = result
}