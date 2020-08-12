### 前言
同步与异步问题应该是每一个前端工程师在实际开发中都会遇到的，除了会用，还要知道其原理才能在解决一些比较坑的地方（相信实际开发中应该不少😄）能够游刃有余。
本文将介绍：
1. 进程与线程的概念。
2. 浏览器中的Event Loop
3. Node的Event Loop与浏览器到底哪里不一样</br>

本文是个人在工作之余的一篇总结，如果有错误、缺漏的地方，欢迎大家和我交流，感激不尽
### 什么是进程？什么是线程？
我们常说javascript是单线程的？那么到底什么是进程？什么是线程？</br>

本质上来说，<span style="color:red">进程和线程都是CPU内分配的一段工作时间</span>
1. 进程（process）是程序的一次执行过程，是一个动态概念，是程序在执行过程中分配和管理资源的基本单位
2. 线程（thread）是CPU调度和分派的基本单位，它可与**同属一个进程**的其他的线程共享进程所拥有的全部资源，**是执行一段指令所需要的时间**。

以Chrome浏览器为例，主要的进程有4个：
1. 浏览器进程 (Browser Process)：负责浏览器的TAB的前进、后退、地址栏、书签栏的工作和处理浏览器的一些不可见的底层操作，比如网络请求和文件访问。
2. 渲染进程 (Renderer Process)：负责一个Tab内的显示相关的工作，也称渲染引擎。
3. 插件进程 (Plugin Process)：负责控制网页使用到的插件
4. GPU进程 (GPU Process)：负责处理整个应用程序的GPU任务</br>

**而avaScript 引擎线程是工作在渲染进程下的**

### JS单线程带来了什么好处
JS在运行的时候可能会阻止UI渲染。
JS是可以修改DOM结构的，如果在UI渲染线程还在工作的时候，就可能导致不能安全的渲染UI。</br>
优点：**可以节约内存。可以节约上下文切换时间。没有锁的问题。**</br>
**虽然javascript是单线，但是javascript中有同步和异步的概念，解决了js阻塞的问题。**

### 执行栈（什么是执行栈）
同时我们要了解一下执行栈的概念，可以认为**执行栈**是一个**存储函数调用的栈结构**
当我们执行 JS 代码的时候就是往执行栈中放入函数</br>
那么遇到异步代码的时候怎么办？
其实当遇到异步代码时，会被挂起并在需要执行的时候加入到Task（有多种task）队列中

### Event Loop
在JavaScript中，任务被分为两种，一种宏任务（MacroTask）也叫Task，一种叫微任务（MicroTask）。</br>
**微任务**： process.nextTick(), promise, MutationObserver</br>
**宏任务**： script, setTimeout, setInterval, setImmediate, I/O， UI render
</br>

### 一道题引发的思考

```
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
    console.log('promise start');
    resolve()
})
.then(() => console.log('promise end'))

console.log('script end')
```
> 浏览器会依次打印出: script start、async2 end、 promise start、script end、async1 end、promise end、setTimeout</br>

这里我们各个阶段来分析一下：
1. 首先执行全局script代码，这是第一轮事件。打印出 script start
执行async1方法，因为await后的方法会被立即执行（可以看作promise的executor，会与script代码一起执行），会打印出asycn2 end，并将await后的代码加入微任务队列。遇到setTimeout会被加入宏任务队列，继续往下执行直接打印出promise start.并将已经resolve的then回调函数加入微任务队列，最后执行script end。</br>
2. 清空由于上一个宏任务产生的微任务队列，根据代码上下文顺序打印出：async2 end、promise end
3. 最后清空宏任务队列打印出：setTimeout</br>

前面比较啰嗦，我这里总结一下：**一旦执行栈为空， Event loop就会从Task队列中拿出需要执行的代码并放到执行栈中执行。**</br>

<span>因此浏览器的事件循环机制遵循以下步骤：
1. 先执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有异步代码需要执行
3. 执行所有的微任务
4. 执行完所有的微任务后，如果有必要的话会渲染页面
5. 开始下一轮的Event-loop
</span></br>

**所以本质上来说，JS中的异步其实还是同步**

### 那么微任务快于宏任务吗？
script（同步代码）也属于宏任务 接下来有异步代码的话就先执行微任务。所以微任务快于宏任务是建立在**异步**的前提下的。


### Node中的 Event Loop 和 浏览器中的 有什么区别？
浏览器和Node中Event Loop其实是不相同的。</br>
node中的Event Loop分6个步骤:
```
   ┌───────────────────────┐
┌─>│        timers         │<————— 执行 setTimeout()、setInterval() 的回调
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     pending callbacks │<————— 执行由上一个 Tick 延迟下来的 I/O 回调（待完善，可忽略）
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     idle, prepare     │<————— 内部调用（可忽略）
│  └──────────┬────────────┘     
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|             |                   ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │ - (执行几乎所有的回调)
│  │         poll          │<─────┤  connections, │ 
│  └──────────┬────────────┘      │   data, etc.  │ 
│             |                   |               | 
|             |                   └───────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|  ┌──────────┴────────────┐      
│  │        check          │<————— setImmediate() 的回调将会在这个阶段执行
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
└──┤    close callbacks    │<————— socket.on('close', ...)
   └───────────────────────┘
```
这里看着可能有点复杂，但是我们先记住以下两点：
1. **在node中微任务一定比宏任务先执行**
2. **对于微任务来说，它会在以上6个阶段的每个阶段完成之前清空微任务队列**</br>

举个栗子，方便理解：
```
fs.readFile(__dirname, () => { // fs.readFile 称为I/O
    setTimeout(() => {
        console.log('setTimeout'); // 2
    }, 0)
    setImmediate(() => {
        console.log('setImmediate'); // 1
    })
});
```

我们分析一下以上代码：首先fs.readFile对应上图的poll阶段，因此会继续往下执行遇到check阶段执行其回调函数首次打印setImmediate，随后执行timers阶段执行setTimeout回调打印setTimeout。

#### process.nextTick()执行顺序？
process.nextTick()是一个特殊的异步API，他不属于任何的Event Loop阶段。事实上Node在遇到这个API时，Event Loop根本就不会继续进行，会马上停下来执行process.nextTick()，这个执行完后才会继续Event Loop。</br>

同样，我们以一道题为例:
```
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
```
各个阶段进行分析：
**在node中微任务一定比宏任务先执行**，因而执行process.nextTick回调函数打印出nextTick,并继续执行内部的process.nextTick回调直到清空该队列，随后进入timers阶段按顺序打印出timer1、promise1

#### 区别
浏览器和 Node 环境下，microtask 任务队列的执行时机不同：
* Node，微任务 在事件循环的各个阶段之间执行
* 浏览器端，微任务 在事件循环的 宏任务 执行完之后执行

### 总结
学习往往只停留在表面是不够的，写这篇文章的时候也参考了很多其他大佬的文章，但是观看还是不够的，还需要自己去实验，去重新捋一遍。如果大家有什么问题，欢迎大家留言交流～


