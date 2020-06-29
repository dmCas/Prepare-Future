// call 内部实现原理

let foo = {
  name: 'wn',
  // context.fn = this
  fn: function  bar() {}
}
function bar(x) {
  console.log(this.name)
  console.log(x)
}

Function.prototype.newCall = function(context) {
  // let that = this
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this // 核心 修改this的指向
  const args = [...arguments].slice(1)
    // const args = [].slice.call(arguments)[1]
  const result = context.fn(...args)
  delete context.fn
  return result

}
// bar.apply(foo)
bar.newCall(foo, 1233)