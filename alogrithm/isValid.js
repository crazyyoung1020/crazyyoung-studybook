/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let reg = /(\{\})|(\(\))|(\[\])/g
    s.match(reg)
    let length=0
    while(s.match(reg) && s.match(reg).length>0){
        length += s.match(reg).length
        s = s.replace(reg,'')
    }
    return length
};