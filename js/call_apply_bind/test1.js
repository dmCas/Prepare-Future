// 分别手写call apply bind 方法
// call

var foo = {
  name: 'yunqi',
  age: '20'
}

function bar(x) {
  console.log(this.name, this.age, x+'是穿过来的实参')
}

Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw Error('Error')
  }
  context = context || window
  var args = [...arguments].slice(1)
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw Error('Error')
  }
  let result
  context = context || window
  context.fn = this
  if(arguments[1]){
    result = context.fn(...arguments[1])
  }
  result = context.fn
  delete result
  return result

}

Function.prototype.myBind = function(context) {
  var _that = this
  var args = [...arguments].slice(1)
  return function F() {
    _that.apply(context,args.concat(...arguments))
  }
}

bar.call(foo, '66')
bar.myCall(foo, '77')
var newBar = bar.bind(foo, 1)
