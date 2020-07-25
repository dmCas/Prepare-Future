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
  let result = constrouctor.apply(obj, arguments)
  // 4. 返回该对象
  return result instanceof Object ? result : obj
}
var yunqi = NewPerson(Person, 'yunqi', 'age')
console.log(yunqi)



// function newFunction() {
//   let obj = {}
//   let constrouctor = [].shift.call(arguments)
//   obj.__proto__ = constrouctor.prototype
//   constrouctor.apply(obj, arguments)

//   return obj 
// }
// var person2 = newFunction(Person, 'yunqi', 20)
// var person1 = new Person('yunqi', 20)
// console.log(person1,person2 instanceof Person)
