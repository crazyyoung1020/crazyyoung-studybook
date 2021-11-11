/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length == 0) return ;
    let common = strs[0]

    for(let i=1;i<strs.length;i++){
        if(strs[i].length === 0){
            return ""
        }
        if(common === strs[i]){
            continue;
        }
        for(let j=0;j<strs[i].length;j++){
            if(common[j] != strs[i][j]){
                common = common.slice(0,j)
                break
            }else if(j === strs[i].length-1){
                common = common.slice(0,j+1)
            }
        }
    }
    return common
};


console.log(longestCommonPrefix(["","aba","aa"]))