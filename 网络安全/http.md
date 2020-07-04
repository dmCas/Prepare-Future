# HTTP 协议 （HyperText Transfer Protocol, 超文本传输协议）
概念：HTTP是一个基于TCP/IP通信协议来传输（超文本）数据

      - HTTP是一个基于TCP/IP协议来定位传输数据（HTML文件，图片文件等）
      - 同时在TCP/IP包基础上对要传输的数据进行再次包装
      - HTTP 是单向单链接, 无状态协议

http: 传输 ht (超文本) 这样的文本的规则


http/1.0
http/1.1
http/2.0

# HTTP
- 规定了请求发送的数据格式
  Request 消息分三部分：
    - Request Line: 请求行 
    （包含：Method，Path-to-resoure (请求资源））

    - Request header: 请求头
    - Request body: 请求正文

- 规定了返回的数据格式
- 传输的规则

# HTTP - node.js
