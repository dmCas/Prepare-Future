## 1. Object.prototype.call
Object.prototype.toString.call(null) 为什么得到 "[object Null]"
答案：
ECMA 规定 Object.prototype.toString 内部逻辑：
调用 Object.prototype.toSting 如果this的值
1. 是 null 返回 [Object Null]
2. 是 undefined 返回 [Object undefined]
3. ...
鉴于 ECMA 的规定， 我们的浏览器实现起来的时候也要遵守上面的规定