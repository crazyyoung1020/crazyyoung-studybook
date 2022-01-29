/**
 * 迭代法
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
  let len = nums.length;
  // result用于每次合并过程中存放结果
  // 每次针对一个block宽度循环结束，将result的结果交给nums暂存，result需要清零
  let result = [];
  // block代表的是当次循环每个排序快的长度
  // 我们分析以下合并终止条件
  // 其实简单分析即可得出，只要最一次循环的block长度满足block*2 >= len,即代表我们这次合并能覆盖整个数组，将整个数组都合并完
  // 最后一次循环，完成任务后，由于会执行block *= 2，所以必然满足 block >= len
  // 那此时已经没有必要进行下一轮
  // 因此循环终止条件是block < len
  for(let block = 1; block < len ; block *= 2) {
      // 因为我们每次会将2个block合并，所以left每次结束都加上2*block
      // left超出数组那必然循环结束，所以left<len
      for(let left = 0; left <len; left += 2 * block) {
          // 定义区间
          // all in [start1,end1] is leftBlock
          // all in [start2,end2] is rightBlock
          let start1 = left;
          let end1 = (left + block - 1) < len-1 ? (left + block - 1) : len-1;
          let start2 = end1+1;
          let end2 = (left + 2 * block -1 ) < len-1 ? (left + 2 * block - 1) : len-1;
          // 每次比较两个block的start位置的数，谁小谁就推进result数组
          // 只要有一个块遍历结束，那么这一轮就结束
          while (start1 <= end1 && start2 <= end2) {
              if(nums[start1] <= nums[start2]){
                 result.push(nums[start1])
                 start1++
              } else {
                 result.push(nums[start2])
                 start2++
              }
          }
          // 如果块1还有剩余，则全部推入
          while(start1 <= end1) {
              result.push(nums[start1])
              start1++;
          }
          // 如果块2还有剩余，则全部推入
          while(start2 <= end2) {
              result.push(nums[start2])
              start2++;
          }
      }
      // result是这一轮处理的结果，将result交给nums保管,
      nums = result;
      // 然后重置result，继续去装下一轮的结果
      result = [];
  }
  return nums;
};


/**
 * 递归法
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
  let len = nums.length;
  let result = [];
  dfs(nums, result, 0, len - 1);
  return nums;
};

function dfs(nums, result, start, end) {
  if (start >= end){
      return;
  }
  // 当前区间的宽度
  let block = end - start+1;
  // all in [start1, end1] is leftBlock
  // all in [start2, end2] is rightBlock
  let start1 = start;
  // 当前区间末尾元素下标
  let end1 = (Math.ceil(block/2)-1) + start;
  let start2 = end1 + 1;
  let end2 = end;
  dfs(nums, result, start1, end1);
  dfs(nums, result, start2, end2);
  // 记录当前合并在result数组里的起点
  let k = start;
  while (start1 <= end1 && start2 <= end2) {
      if(nums[start1] < nums[start2]){
         result[k] = nums[start1];
         k++
         start1++;
      } else {
         result[k] = nums[start2];
         k++
         start2++
      }
  }
  // 如果块1还有剩余，则全部推入
  while(start1 <= end1) {
      result[k] = nums[start1];
      k++;
      start1++;
  }
  // 如果块2还有剩余，则全部推入
  while(start2 <= end2) {
      result[k] = nums[start2];
      k++;
      start2++;
  }
  for (k = start; k <= end; k++){
      // 没完成一次，都动态的去修改nums
      nums[k] = result[k];
  }
}
