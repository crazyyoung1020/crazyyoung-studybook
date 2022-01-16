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

let arr = [1,2,4,5,67,7,8,2,1,1,2,4,5];
console.log(insertionSort(arr));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    // 插入排序
    // cur等待插入的元素
    // pt是cur当前位置的指针，会随着cur移动
    let cur,pt;
    for(let i=0;i<nums.length;i++){
        cur = nums[i];
        pt = i;
        // 如果pt-1>=0，代表cur前面还有数，如果前面都没有数了，肯定也不用再循环了，所以pt-1>=0
        // 如果cur>nums[pt-1],说明当前项比前一项大，那么也不用移动了，跳出当次插入
        while(pt-1>=0&&cur<nums[pt-1]){
            // 如果cur 小于 前一项，那么将cur对应的pt位置的元素赋值为pt-1的值，不用担心pt位置元素丢，pt位置元素一直保存在cur变量里；这里也可以理解为pt位置就是一个空的，值一开始就被拿走了。
            nums[pt] = nums[pt-1];
            pt--
        }
        // 然后再讲cur放回到pt位置，就完成了一次插入操作。
        // 这里可以做一个判断，如果pt!=i,那么再赋值，否则说明cur根本都没有移动
        if(pt != i){
            nums[pt] = cur;
        }
    }
    return nums;
};