## 继承的本质是什么
**继承的本质就是复制，即重写原型对象，代之以一个新类型的实例**


## Class本质是什么
**Class**的本质是一个函数
```
class Person {

}
console.log(Person instanceof Function) // true
```

## 组合继承 （最常见的继承方式）
```
function Foo(value) {
    this.val = value
    this.name = 'yunqi',
    this.age = 18
}

console.log(Foo.prototype.constructor === Foo) // true

Foo.prototype.getValue = function() {
    console.log(this.val)
}

function Bar(value) {
    Foo.call(this, value)
}

Bar.prototype = new Foo()


var person = new Bar('Hello World')

person.getValue()
```

## 原型链继承
```
function SuperType() {
    this.property = true
}
SuperType.prototype.getSuperValue = function() {
    return this.property
}

function SubType() {
    this.subproperty = false
}

SubType.prototype = new SuperType()
SubType.prototype.getSuperValue = function() {
    return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue()) // false

// 想让 B 继承 A， 只需要要看A的原型链上有些什么东西，然后把B的原型重写成A的原型链上的东西
```

## 构造函数继承
缺点
1.  只能继承父类的属性和方法，不能继承到原型上的属性和方法
2.  无法实现复用影响性能
```
// 借用构造函数继承
function SuperType() {
    this.color = ['red', 'yellow', 'green']
}

SuperType.prototype.getValue = function() {
    console.log('我是原型上方法')
}

function SubType() {
    SuperType.call(this)
}

var instance = new SuperType()
instance.color.push('black')
console.log(instance.color, '借用构造函数继承') // ['red', 'yellow', 'green', 'black']

var instance2 = new SuperType()
instance2.getValue()
console.log(instance2.color, '借用构造函数继承') // ['red', 'yellow', 'green']
```


