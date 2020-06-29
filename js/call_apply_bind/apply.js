// apply 内部实现原理

let foo = {
  name: 'wn'
}

function bar(x,y) {
  console.log(this.name)
  console.log(x)
  console.log(y)
}

Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') {
    throw Error('Error')
  }
  context = context || window
  context.fn = this
  // 处理参数 和 call有区别
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  }else{
    result = context.fn()
  }
  delete context.fn
  return result
}

bar.myApply(foo, [666, 777])



