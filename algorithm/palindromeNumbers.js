/**
 * 回文数
 */

 function palindromeNumbers(d){
    while(d[0] == d[d.length -1] && d.length > 1){
        d.pop()
        d.shift()
    }
    return d.length <= 1
 }



