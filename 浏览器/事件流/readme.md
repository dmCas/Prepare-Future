## 什么是JS的事件流？--事件机制
事件流描述的是**从页面接收事件的顺序**

### 一个事件的触发会涉及到哪些阶段
1. 从window层往事件触发处传播,直到遇到注册的捕获事件会触发
```
//addEventListener用来给Dom节点注册一个点击事件
document.getElementById('root').addEventListener('click', function(){
  console.log(123)
})
```


2. 传播到事件触发处时，触发注册事件
3. 从事件触发处往window传播，遇到注册的冒泡事件会触发

这里疑惑就来了，好像听说浏览器的事件流是事件冒泡啊？怎么会变成先捕获后冒泡了呢？

### addEventListener的第三个参数
addEventListener接收三个参数：
- 要处理的事件名
- 作为事件处理程序的函数
- 一个布尔值
<p style='font-size:14px'>
最后这个布尔值表示事件处理程序执行的阶段，默认为false，表示在冒泡阶段处理程序，若设为true则表示在捕获阶段执行。
</p>

```
<div id="parent" style="width:80px; height:80px; background:yellow">
    <div id="child" style="width:40px; height:40px; background:red"></div>
 </div>

 <script>
    var parent = document.getElementById('parent')
    var child = document.getElementById('child')
    parent.addEventListener('click', function(event){
      console.log('父盒子')
    }, true)
    child.addEventListener('click', function(event) {
      console.log('子盒子')
    }, false)
  </script>
```

<p style='font-size:14px'>
以上代码若不设置第三个值，则默认冒泡阶段执行事件处理程序，打印顺序为子盒子->父盒子</br>
若设为以上形式,则表示父盒子事件再捕获阶段就去执行，而子盒子仍再冒泡阶段执行，因此打印顺序为父盒子->子盒子
</p>

具体阶段如图所示：</br>
<img src="https://user-gold-cdn.xitu.io/2020/6/15/172b8924100c7997?w=561&h=318&f=png&s=40083" style="width:80%"></img>

### 阻止冒泡

```
child.addEventListener('click', function(event) {
    // 会阻止冒泡以及该容器之后所有的点击事件
    event.stopImmediatePropagation()
    // 只阻止冒泡
    event.stopPropagation() 
    console.log('子盒子')
}, false)
```