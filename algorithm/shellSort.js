
/**
 * 希尔排序
 */
function shellSort(arr){
    
}


let arr = [15,4,1,12,3,4,5]
shellSort(arr)


document.getElementById('button').onclick= ()=>{
    let inputVal = document.getElementById('inputVal').value
    let result = shellSort(inputVal.split(',').map(Number))
    document.getElementById('resultDiv').innerText = result
}