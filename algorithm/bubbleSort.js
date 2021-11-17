/**
 * @description 冒泡排序
 * @param {Array} arr  输入数组
 * @return {Array} 返回一个排序好的数组
 */

// 初次通过的代码
function bubbleSort(arr){
    // let temp
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                // temp = arr[j]
                // arr[j] = arr[i]
                // arr[i] = temp
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

let arr = [2,4,5,5,6,1,1]

console.log(bubble(arr))


// 菜鸟教程给的示例省略 
