function Person() {
  this.sayName = function () {
    console.log('Hello world')
  }
  this.arr = [1, 2, 3]
}

var person1 = new Person()
var person2 = new Person()
console.log(person1.arr == person2.arr, person1.sayName == person2.sayName)
person1.arr.push(4)
console.log(person1.arr, person2.arr)