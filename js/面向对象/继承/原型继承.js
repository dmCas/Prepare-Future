// 原型链继承

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
console.log(instance.getSuperValue(), '原型链继承') // false

// 想让 B 继承 A， 只需要要看A的原型链上有些什么东西，然后把B的原型重写成A的原型链上的东西