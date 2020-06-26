# 浏览器的缓存机制
<!-- 性能优化相关 -->
缓存是一种简单高效的优化方式，他可以显著减少网络传输所带来的损耗


## 缓存位置
1. Service Worker
2. Memory Cache
3. Disk Cache
4. Push Cache
5. 网络请求


Service Worker:
缓存与浏览器其他内建的缓存机制是不同的，它可以让我们自由控制 缓存哪些文件，
如何匹配缓存，如何读取缓存，并且缓存是持续性的

若Service Worker没有命中缓存的时候:我们需要调用fetch函数（往浏览器的内存中）获取数据
但是不管我们是从Memory Cache还是从网络请求中获取的数据，浏览器统一会显示我们是从Service Worker中获取的。

Memory Cache:
内存缓存 读取缓存中的数据肯定是比读取磁盘要快的，但是内存缓存持续性短，会随着进程的释放而释放
一旦我们关闭tab也面，内存中的缓存也就被释放了

问：既然内存缓存这么高效，那我们可以把数据全都存在内存中吗？
答：不能，首先中计算机中的内存比硬盘容量小得多，系统对内存的使用需要精打细算。

Disk Cache:
存储在硬盘中的缓存，读取速度慢一点，但是什么都能存到磁盘中。它比Memory Cachesh胜在容量和存储时效性


Push Cache：
Push Cache是HTTP/2中的内容，当以前三种缓存都没有命中的时候它才会被使用
它的缓存时间很短暂，只在会话（Session)中存在，一旦结束会话，就被释放



## 缓存策略
强缓存 和 协商缓存，缓存策略都是通过HTTP Header来实现

- 强缓存
  可以通过设置两种HTTP Header来实现：HTTP/1.0:Expires 和 HTTP/1.1:Cache-Control
  强缓存表示在缓存期间不需要请求， state code 为 200

  Expires:  Thu, 23 Jan 2020 11:43:04 GMT 
    当客户端再次请求该资源的时候，会把客户端时间与该时间戳进行对比，如果大于该时间戳则已过期，否则直接使用该缓存资源。这是一个绝对时间，如果修改本地时间，可能存在不准确的情况。

  Cache-Control:max-age=30
    出现于HTTP/1.1，优先级高于Expires，该属性表示资源会在30s后过期，需要再次请求

  pragma: no-cache
    本地缓存会被忽略 若设置该字段会去请求服务器验证资源是否更新，如果没更新才继续使用本地缓存，此时返回的是 304，这就是协商缓存。
    优先级： pragma -> cache-control -> expires。

- 协商缓存
  如果强缓存未命中，就要发起请求来验证是否更新。协商缓存可以通过
  设置两种HTTP Header来实现： Last-Modifed 和 ETag

  Last-Modified 和 If-Modified-Since

  Last-Modified:表示本地文件最后修改日期，If-Modified-Since会将Last-Modifed的值发送给服务器，询问服务器在该日期后资源是否
  有更新，有更新的话将新的资源返回，否则返回304
  缺点：
    1. 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成Last-Modified被修改，造成服务端不能命中缓存导致发送相同的资源
    2. 因为Last-Modifed只能以秒计时，时间的精确度只能到秒，如果在一秒内的修改是检测不到更新的，仍会告知浏览器使用旧的缓存。

  因为这两个缺陷的存在，所以有了ETag

  ETag 和 If-None-Match
   ETag类似于文件指纹， If-None-Match会将ETag的值发送给服务器，询问服务器该资源是否有更新，有更新的话将新的资源返回，否则返回304


  ETag 是弥补Last-Modified的两大缺点

- 如果在项目中什么缓存策略都没用，那么浏览器会怎样
对于这种情况，浏览器会采用一个启发式算法，通常会取响应头中的Date减去Last-Modified值的10%作为缓存时间

## 实际场景应用缓存策略

1. 频繁变动的资源： Cache-Control：no-cache(不使用强缓存 进入协商缓存)
2. 代码文件：一般文件名都做了hash处理，只有修改代码才会有新的文件产生，Cache-Control：max-age=31536000