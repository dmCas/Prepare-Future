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
var add = currying(function
    var sum;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum) 
})
add(1)(2).toString()