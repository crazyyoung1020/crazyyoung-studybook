/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let a = s.split('');
    let num = 0;
    let search = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    for(let i=0;i<a.length;i++){
        if(i<a.length-1 && search[a[i]]<search[a[i+1]]){
            num += search[a[i+1] ] - search[a[i]]
            i ++
        }else {
            num += search[a[i]]
        }
    }
    return num
};