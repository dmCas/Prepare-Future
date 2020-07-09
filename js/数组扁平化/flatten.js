
var arr = [[1, 2, 3], [2, 3, 4], [5, 7, 8, 9], [1, 24, 5, [3, 5, 6]]]
function flatten(arr) {
  let path = []
  let len = arr.length
  for(let i = 0; i < len; i++){
    if(Array.isArray(arr[i])){
      path = path.concat(flatten(arr[i]))
    }
    else{
      path.push(arr[i])
    }
  }
  return path.sort((a,b) => a - b)
}
flatten(arr)
