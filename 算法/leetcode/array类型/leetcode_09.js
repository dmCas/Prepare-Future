// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数

var isPalindrome = function(x) {
  if(x < 0) return false
  var s = x.toString()
  var arr = s.split('')
  var newArr = arr.map(item => parseInt(item))
  var reverArr = JSON.parse(JSON.stringify(newArr))
  reverArr.reverse()
  var flag = newArr.every((item, index) => item == reverArr[index])
  console.log(newArr, reverArr, s.split(''),s)
  return flag
};

console.log(isPalindrome(-121))