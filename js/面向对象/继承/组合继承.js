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
    Foo.call(this, value) // 构造函数继承
}

Bar.prototype = new Foo() // 组合继承


var person = new Bar('Hello World')

person.getValue()