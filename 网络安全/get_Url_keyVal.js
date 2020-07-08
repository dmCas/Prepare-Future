function  parse_url(url,key) {
  var str = url.split('?')[1]
  var keyValue = str.split('&')
  var obj = {}
  var json = {}
  for(let i =0; i<keyValue.length;i++) {
    obj = keyValue[i].split('=')
    json[obj[0]] = obj[1] 
  }
  // console.log(json[key])
  return json[key]
}

var url = 'http://www.xxx.com?a=1&b=2&c=3';
parse_url(url,"b");