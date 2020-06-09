var http = require('http')

http.createServer(function(req, res) {
  // res.write({
  //   code:0,
  //   name:'蜗牛',
  //   age:18
  // })
  // res.write('<head><meta charset="UTF-8"></head>')
  res.write('服务器启动成功')
  res.end()
}).listen(3000)