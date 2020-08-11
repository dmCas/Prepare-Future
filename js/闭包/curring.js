var currying = function (fn) {
    var args = []
    function next() {
        args = args.concat([...arguments])
        console.log(args)
        return next
    }
    next.toString = function(){
        fn.call(this, ...args)
    }
    return next
}
var add = currying(function() {
    let sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum) 
})
add(1)(2)(3, 4, 5).toString()