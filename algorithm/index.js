var twoSum = function(nums, target) {
    var temp = {};
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        console.log('dif',dif)
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
        console.log(temp)
    }
};

let nums = [2,7,3,4,23,2,6]

let target = 8;
twoSum(nums,target)

