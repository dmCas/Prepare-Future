function  A() {
  this.name = 'a'
  this.color = ['yellow', 'red']
}

function B() {
  A.call(this)
}

B.prototype = new A()

var b1 = new B()
var b2 = new B()
b1.name = 'bbb'
b1.color.push('black')

console.log(b1.name, b1.color, b2.name, b2.color) // bbb 3 a 2

