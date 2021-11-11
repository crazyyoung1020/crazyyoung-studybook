/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let temp = []
    for (let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            temp.push(i);
        }
    }
    for (let i=0;i<nums.length;i++){
        if(i<temp.length){
            nums[i] = nums[temp[i]]
        }else{
            nums[i] = 0
        }
    }
    return nums
};

moveZeroes([0,1,0,3,12])