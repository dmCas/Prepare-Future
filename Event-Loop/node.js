// const fs = require('fs')
// setTimeout(() => {
//     console.log(123)
// })
// new Promise((resolve) => {
//     resolve('321')
// })
// .then(res => console.log(res))
// fs.readFile(__dirname, () => { // fs.readFile 称为I/O
//     // 也就是说这两个函数写在了I/O函数中
//     new Promise((resolve) => {
//         resolve('666')
//     })
//     .then(res => console.log(res))
//     setTimeout(() => {
//         console.log('setTimeout');
//     }, 0)
//     setImmediate(() => {
//         console.log('setImmediate');
//     })
// });

//  1  7 6 8 2 4 3 5 9 11 10 12
// console.log(1);
// setTimeout(() => {
//   console.log(2);
//   process.nextTick(() => {
//     console.log(3);
//   });
//   new Promise((resolve) => {
//     console.log(4);
//     resolve();
//   }).then(() => {
//     console.log(5);
//   });
// });
// new Promise((resolve) => {
//   console.log(7);
//   resolve();
// }).then(() => {
//   console.log(8);
// });
// process.nextTick(() => {
//   console.log(6);
// });
// setTimeout(() => {
//   console.log(9);
//   process.nextTick(() => {
//     console.log(10);
//   });
//   new Promise((resolve) => {
//     console.log(11);
//     resolve();
//   }).then(() => {
//     console.log(12);
//   });
// });

setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function() {
      console.log('promise1')
    })
   }, 0)
   process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
      console.log('nextTick')
      process.nextTick(() => {
        console.log('nextTick')
        process.nextTick(() => {
          console.log('nextTick')
        })
      })
    })
   })
