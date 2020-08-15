const { pathToRegexp} = require("path-to-regexp");
let reg = pathToRegexp('/home',[], {end:true});
reg.test('home/1/2/3/4')
console.log(reg) // 路径转正则