/**
 * 有效的括号
 */

// function validBracket(str){
//     if(str.length %2 !=0){
//         return false
//     }

//     let map = new Map([
//         ["{","}"],
//         ["[","]"],
//         ["(",")"]
//     ])
//     let stack = []
//     for( key of str){
//         if(map.has(key)){
//             stack.push(key)
//         }else{
//             if(map.get(stack[stack.length - 1]) != key){
//                 return false
//             }else{
//                 stack.pop()
//             }
//         }
//     }

//     return stack.length == 0
// }



var validBracket = function(s) {
    if(s.length %2 != 0){
        return false
    }
    let map = new Map([
        ["{","}"],
        ["[","]"],
        ["(",")"]
    ])
    let stack = []
    for(d of s){
        if(map.has(d)){
            stack.push(d)
        }else{
            if(map.get(stack[stack.length -1] != d)){
                return false
            }else{
                stack.pop()
            }
        }
    }
    return stack.length == 0
};
