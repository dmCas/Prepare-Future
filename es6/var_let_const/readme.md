## var let const 区别
1. var存在变量提升 let const 不存在
2. let const存在暂时性死区 ，不可以在变量被声明前使用
3. 它们声明后也不会绑在window（浏览器）和global（node）上，而var可以。
4. let const不可以被重复声明 var可以
## 什么是变量提升？
```
var a = 1
console.log(a)
```

```
<!-- 提升的是声明 -->
var a;
console.log(a);
a = 1;
```

```
var a = 10; // var a  a = 10
var a;  // var a
console.log(a) // 10
```

**先提升在赋值 函数也会提升**
**函数的提升优先于变量的提升 并提升至当前作用域的顶部**

## 什么是暂时性死区？


## 为什么要存在变量提升
提升的根本原因是为了解决函数间的相互调用

## 总结
1. 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把
声明挪到作用域顶部
2. var存在提升，我们能在声明之前使用，let const因为暂时性死区的原因，不能在声明前使用
3. 它们声明后也不会绑在window（浏览器）和global（node）上，而var可以。
4. let const不可以被重复声明 var可以