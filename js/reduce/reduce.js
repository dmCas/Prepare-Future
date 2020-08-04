var arr = [0, 1, 2, 3]

Array.prototype.myReduce = function() {
    let _that = this
    let path = null
    _that.forEach(item => path += item)
    return path
}

var a = arr.myReduce((a,b) => a + b)
var b = arr.reduce((a, b) => a + b)
console.log(a, b)