// const lib = (function(){
//     let obj = {},private = 'abc';
//     obj.getPrivate = function(){
//       return private;
//     }
//     obj.addtoPrivate = function (val){
//       return private+val
//     }
//     return obj;
//   })()


// (function (global){
//   let obj = {},private = 'abc';
// obj.getPrivate = function(){
//   return private;
// }
// obj.addtoPrivate = function (val){
//   return private+val
// }
// window.obj = obj;
// })(this)


(function(){
  let obj={},private = 'abc';
  return function(){
    if(true){

    }else{

    }
    return obj
  }
})()