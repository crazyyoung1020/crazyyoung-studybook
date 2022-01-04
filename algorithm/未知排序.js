
// 这种排序叫什么？
// 这种排序如果没有重复元素的话，排序时间复杂度是O(n);
// 如果有重复元素就不行了
// 这个排序方法可以起到去重复并排序的效果


function sort(arr){
    let bucket = [];
    let res = [];
    for(let i=0;i<arr.length;i++){
        bucket[arr[i]] = i;
    }
    for(let i=0;i<bucket.length;i++){
        if(bucket[i]!=undefined){
            res.push(arr[bucket[i]])
        }
    }
    return res;
}

let arr = [3,4,7,8,5,2,1]

console.log(sort(arr));