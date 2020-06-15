## 有几种方式实现存储功能？  
* 4种 分别是： cookie, localStorage, sessionStorage, indexDB

## 分别是什么？
1. cookie
一般有服务器生成，可设置失效时间。如果在浏览器端生成的cookie，默认关闭浏览器后失效。
token等身份令牌会存储在token里面，每次都会携带在http头中。
缺点：如果使用cookie保存过多会带来性能问题
大小：4K
2. localstorage
除非被清除，否则永久保存
仅在浏览器中保存，不参与和服务器通信
大小：PC一般5M,移动端2.5M

3. sessionStorage
仅在当前会话下有效，关闭页面或浏览器后失效
大小：PC一般5M,移动端2.5M

4. indexDB
永久保存
大小：一般没有上限大小

## 什么是 Service Workers?
运行在浏览器背后 独立的线程
可以用来实现缓存的功能 使用Service Workers
必须要使用HTTPS协议，因为它当中涉及到请求拦截

### 实现缓存的步骤：
1. 注册Service Worker
2. 监听到install事件到之后，就可以缓存需要的文件（大文件的断点续传如何实现）
3. 用户下一次访问就可以查询是否存在缓存，存在的话就读取缓存文件
