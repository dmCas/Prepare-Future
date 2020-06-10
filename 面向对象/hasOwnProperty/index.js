// 使用该方法可以检测一个实例中的一个属性是存在于实例中还是存在于原型中 -》 只在存在于实例中的时候才会返回true
// 作用 可以清楚 什么时候访问原型的属性 什么时候访问实例属性
function Person() {
  
}

// Person.prototype.name = 'yunqi'
// Person.prototype.sayName = function () {
//   console.log('我是云栖')
// }

// var a = new Person()
// var b = new Person()
// a.sayName = function () {
//   console.log('我叫北辰')
// }
// a.age = 18
// a.sayName()
// b.sayName()
// console.log(b.hasOwnProperty('sayName'))
Person.prototype = {
  sayName: () => {
    console.log('11111')
  }
}

var friend = new Person()


friend.sayName()