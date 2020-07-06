// 什么是浅拷贝？如何实现浅拷贝？如何实现深拷贝


// 深拷贝
// Object.assign 只会拷贝所有属性的值放到新的对象中去
// let a = {age:1,arr:[1, 2, 3, 4]}
// let b = Object.assign({}, a)
// let c = {...a} // 浅拷贝
// let d = JSON.parse(JSON.stringify(a))
// // var c = Object.assign(b, a)
// b.age = 4
// a.age = 2
// a.arr.push(4)
// console.log(a,b, c,d)
// console.log(b)     


let a = {
  age : 1,
  jobs: {
    first: 'Coder'
  }
}

let b = {...a}
b.jobs.first = 'waiter'
console.log(a.jobs.first)
