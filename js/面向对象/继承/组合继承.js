// 组合继承

function Foo(value) {
    this.val = value
    this.name = 'yunqi',
    this.age = 18
}

console.log(Foo.prototype.constructor === Foo, '组合继承') // true

Foo.prototype.getValue = function() {
    console.log(this.val)
}

function Bar(value) {
    Foo.call(this, value)
}

Bar.prototype = new Foo()


var person = new Bar('Hello World')

person.getValue()