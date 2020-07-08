// 33
function findResult(num,dir) {
  var arr = []
  while(num>0) {
    n = num % 2
    num = Math.floor(num / 2)
    arr.push(n)
  }
  if(dir=='left'){
    arr.push(0)
  }else{
    arr.pop()
  }
  return arr.splice(',')
}

findResult(33,left)