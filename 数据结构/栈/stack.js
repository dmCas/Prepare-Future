class Stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    this.stack.pop()
  }
  
  peek() {
    return this.stack[this.getCount() - 1]
  }

  getCount() {
    return this.stack.length
  }

  isEmpty() {
    return this.getCount() === 0
  }
}

var arr = [1, 1, '1', '1', 3 ,4, 3]
var newArr = [...new Set(arr)]

function clearSame(arr) {
  let len = arr.length
  var newArr = []
  for(let i = 0; i<arr.length; i++) {
    if(arr.slice(i+1).indexOf(arr[i]) < 0 ) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
}
clearSame(arr)
console.log(newArr, arr)