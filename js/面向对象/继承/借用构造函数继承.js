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

var instance = new SubType()
instance.color.push('black')
console.log(instance.color, '借用构造函数继承') // ['red', 'yellow', 'green', 'black']

var instance2 = new SubType()
instance2.getValue()
console.log(instance2.color, '借用构造函数继承') // ['red', 'yellow', 'green']
// 为什么会这样？ 只能继承父类的实例属性和方法 不能继承原型属性和方法 无法实现复用
