## 事件处理程序（事件侦听器）
事件处理程序表示**响应某个事件的函数（以on开头）**</br>
目前主要支持的有三种：
1. DOM0级事件处理程序
2. DOM2级事件处理程序
3. IE级事件处理程序

### DOM0级事件处理程序
<p style='font-size:14px'>
DOM0级的事件处理程序是在绑定事件的元素的作用域中运行
</p>

```
var btn = document.getElementById('myBtn')
btn.onclick = function () {
  console.log(this.id) // myBtn
}
// 删除DOM0级方法指定的事件处理程序
btn.onclick = null
```
这种形式书写较为直观，简洁，但缺点
**只支持一个事件处理程序**

### DMO2级事件处理程序

#### 定义了两个方法
1. addEventListener()

2. removeEventListener()

<p style='font-size:14px'>
所有的DOM节点都包含这两个方法，接收三个参数：要处理的时间名、作为事件处理程序的函数、事件流形式
</p>

作用域：**其依附元素的作用域种运行</br>**
优点：**可以添加多个事件处理程序，并顺序执行**

### IE事件处理程序

#### 定义了两个方法
1. attachEvent()
2. detachEvent()

<p style='font-size:14px'>
接收两个相同的参数：事件处理名称和事件处理程序函数
</p>

作用域：**事件处理程序会在全局作用域中运行**

```
var btn = document.getElementById('myBtn')
btn.attachEvent("onclick", function(){
  console.log(this === window) // true
})
```
区别：可以为一个元素添加多个事件处理程序，倒序执行

### 三种事件处理程序对比
对比|DOM0级|DOM2级|IE级
--|:--|:--|:--
形式|element.onclick|element.addEventListener('onclck',callback,false)|element.attachEvent('onclick',callback)
执行阶段|冒泡阶段|冒泡（默认）/捕获阶段|冒泡阶段
作用域|其依附元素的作用域|其依附元素的作用域|事件处理程序会在全局作用域中运行
多个事件处理程序|不支持（唯一）|支持，且顺序执行|支持，倒序执行
