// // 手写promise

// new Promise((resolve, reject) => {
//   ajax(url, res => {
//     if (res) {
//       resolve(res)
//     } else {
//       reject(res)
//     }
//   })
// }).then((result) => {

// }).catch(() => {

// }).finally(() => {

// })

// const PENDING = 'pending'
// const RESOLVED = 'resolved'
// const REJECTED = 'rejected'

// function Mypromise(fn) {
//   const that = that
//   that.state = PENDING
//   that.value = null // 保存resolve或reject抛出来的值
//   // 变成resolved状态后变成then 通过[]保存一些then回调函数
//   that.resolvedCallbacks = []
//   that.rejectedCallbacks = []
  
//   // 2.接下来完善resolve和reject函数
//   function resolve(value) { // new Promise.resolve(1) -> 被then回调函数接收
//     // 保证当前状态是等待中状态 
//     if (that.state === PENDING) {
//       that.state = RESOLVED
//       that.value = value
//       that.resolvedCallbacks.map((cb => cb(that.value)))
//     }
//   }

//   function reject(value) {
//     if (that.state == PENDING) {
//       that.state = REJECTED
//       that.value = value
//       that.rejectedCallbacks.map(cb => cb(that.value))
//     }
//   }

//   // 3.完善执行fn
//   try {
//     fn(resolve, reject)
//   } catch(error) {
//     reject(error)
//   }
// }
// // 4. 实现一个.then函数
// Mypromise.prototype.then = function(onFulfilled, onRejected) {
//   const that = that
//   // 首先判断两个参数是否为函数类型，因为这两个函数是可选的
//   // 当参数不是函数类型的时候，我们手动创建一个箭头函数赋值给对应的参数
//   onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
//   onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
//   if (that.state === PENDING) {
//     that.resolvedCallbacks.push(onFulfilled)
//     that.rejectedCallbacks.push(onRejected)
//   }

//   if (that.state === RESOLVED) {
//     onFulfilled(that.value)
//   }

//   if (that.state === REJECTED) {
//     onRejected(that.value)
//   }
// }

// var test = new Mypromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//     console.log(1)
//   }, 1000)
// })

// function test2() {
//   return new Mypromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2)
//       console.log(2)
//     }, 500)
//   })
// }
// test.then(test2)

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.status = PENDING
  that.value = null
  that.resolveCallBacks = []
  that.rejecteCallBacks = []

  function resolve (value) {
    if(that.status == PENDING) {
      that.status = RESOLVED
      that.value = value
      that.resolveCallBacks.map((cb) => cb(that.value))
    }
  }

  function reject (value) {
    if(that.status == PENDING) {
      that.status = REJECTED
      that.value = value
      
      that.rejectCallBacks.map((cb) => cb(that.value))
    }
  }

  try {
    fn(resolve, reject)
  } catch(error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
  if(that.status == PENDING) {
    that.resolveCallBacks.push(onFulfilled)
    that.rejecteCallBacks.push(onRejected)
  }

  if(that.status == RESOLVED) {
    // console.log('执行then中')
    onFulfilled(that.value)
  }

  if(that.status == REJECTED) {
    onRejected(that.value)
  }
}

var p = new MyPromise((resolve, reject) => {
  console.log(123)
  resolve(1111111)
})
p.then((res) => console.log(res))