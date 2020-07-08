var foo = {
  name: 'yunqi',
  age: 19
}

function bar(age, year) {
  console.log(this.name,age, year) 
}

Function.prototype.myBind = function(context) {
  let _that = this
  let args = [...arguments].slice(1)
  return function() {
    _that.apply(context,args.concat(...arguments))
  }
}

Function.prototype.myCall = function(context) {
  if(typeof this != 'function') {
    throw Error('Error!')
  }
  let args = [...arguments].slice(1)
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function(context) {
  if(typeof this != 'function') {
    throw Error('Error!')
  }
  context = context || window
  context.fn = this
  if(arguments[1]) {
    var result = context.fn(...arguments[1])
  }
  else{
    var result = context.fn()
  }
  return result
}

var newBar = bar.myBind(foo, 18, 19)
newBar2 = bar.myCall(foo, 18, 19)
newBar3 = bar.myApply(foo, [18, 19])