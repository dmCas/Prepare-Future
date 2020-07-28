// 寄生组合继承 在 组合继承的 基础上进行优化
// 优化组合继承的缺点：在继承父类函数时调用了构造函数

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

// Bar.prototype = Object.create(Foo, {
//     constructor: {
//         value: Child
//     }
// }) // 组合继承

let pro = Object.create(Parent.prototype) // 创建父类原型的一个副本
pro.constructor = Child // 弥补因重写原型而失去的默认constructor
Child.prototype = pro



var person = new Bar('Hello World')

person.getValue()