
/**
 * 希尔排序
 */
function shellSort(arr){
    var len = arr.length;
    gap = Math.floor(len/2);
    for(gap;gap>0;gap=Math.floor(gap/2)){
        for(var i=gap;i<len;i++){
            temp = arr[i];
            for(var j = i-gap;j>=0 && arr[j]>temp;j-=gap){
                arr[j+gap] = arr[j]
            }
            arr[j+gap] = temp;
        }
    }
}


let arr = [15,4,1,12,3,4,5]
console.log(shellSort(arr))