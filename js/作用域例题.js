(()=>{
    {
        function f(){'a'};
        f = 1;
        f = 2;
        function f(){'b'}
        f = 3;
    }
    console.log('f=',f)
})()


console.log(f)