var foo = {
  name: 'yunqi'
}
function a(x, y) {
  console.log(this.name)
  console.log(x,y)
}

Function.prototype.myBind = function(context) {
  const _this = this
  const args = [...arguments].slice(1)
  return function F() {
    // 因为返回了一个函数 我们可以new F() 所以需要判断
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

var b =  a.bind(foo)
var c =  a.myBind(foo, 1 , 2)
b()
c()

