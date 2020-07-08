
// 在JS中，闭包存在的意义就是让我们可以间接的访问函数内部的变量

let a = 1
function A() {
  let a = 1
  global.B = function() {
    console.log(a)
  }
}

// A()
// B()

// 循环中，使用闭包解决'var'定义函数的问题
for (var i = 1; i <= 5; i++) {
  // (function(j){
  //   setTimeout(function timer() {
  //     console.log(j)
  //   }, j * 1000)
  // })(i)
  setTimeout((i) => {
    console.log(i)
  }, i * 1000, i)
}

// 闭包会保留词法作用域
// 会造成内存泄漏