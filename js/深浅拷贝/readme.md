# 深拷贝

```JSON.parse(JSON.stringify(object))```
局限性：
  1. 会忽略 undefined
  2. 会忽略Symbol
  3. 不能序列化函数
  4. 