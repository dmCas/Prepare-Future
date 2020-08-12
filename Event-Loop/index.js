// Promise本身是异步方法
// 1. 全局宏任务:1 、script start 、 async2 end 、promise start
// jobs: promise end、 async1 end  、 promise pending、 
// task:2 script end

// 1. 1、script start 、 async2 end 、promise start
// 2. promise end、 async1 end  、 promise pending
// 3. 2、script end

console.log('script start');

async function async1() {
    await async2();
    console.log('async1 end');
};

async function async2() {
    console.log('async2 end');
};

async1()

setTimeout(() => {
    console.log('setTimeout')
}, 0)

new Promise((resolve, reject) => {
    console.log('promise');
    resolve('promise pending')
})
.then((res) => console.log(res))
.then(() => console.log('promise2'))

console.log('script end')