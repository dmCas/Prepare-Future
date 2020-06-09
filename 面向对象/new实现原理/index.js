function Person(name, age) {
  this.name = name,
  this.age = age
}


function NewPerson() {
  // 1.创建一个新对象
  var obj = {}
  // 2.拿到第一个传入的参数，并继承原型上的属性
  var constrouctor = [].shift.call(arguments)
  obj.__proto__ = constrouctor.prototype
  // 3.构造函数的作用域赋给新对象
  constrouctor.apply(obj, arguments)
  // 4. 返回该对象
  return obj
}
var yunqi = NewPerson(Person, 'yunqi', 'age')
console.log(yunqi)