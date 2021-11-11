/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0,
        j = height.length - 1,
        area = 0
    while(i < j){
        currentArea = (j-i) * Math.min(height[i],height[j])
        area = Math.max(area,currentArea)
        height[i]<height[j] ? i++ : j--
    }

    console.log(area)
    return area
};

maxArea([1,8,6,2,5,4,8,3,7])