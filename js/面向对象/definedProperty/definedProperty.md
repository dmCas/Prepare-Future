## Object.definedProperty
* `[[Configurable]]`：能否修改属性的特性（delete等操作）默认值为true
* `[[Enumerable]]`: 能否通过for in 循环key值 默认为true
* `[[Writable]]`: 能否被修改，默认为true
* `[[Value]]`: 属性的值，默认为undefined

## for in 
> 遍历数组或对象中的每一个key值
**和Object.kes的区别：for in 会查找其原型链上的属性**
* 数组中：arr [1, 2, 3, 4, 5] -> // 0 1 2 3 4
* 对象中：obj {name: 'yunqi', age:'18'} -> name, age

## for of
> 遍历数组或对象中的每一个值
* 数组中：arr [1, 2, 3, 4, 5] -> // 1 2 3 4 5
* 对象中：obj {name: 'yunqi', age:'18'}  -> TypeError obj is not iterable
> 改进方法：使用Object.keys() **将对象的键名生成一个数组，然后遍历这个数组**


