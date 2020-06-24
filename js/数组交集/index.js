// Array.includes
var a = [1, 2, 3, 3, 4, 5]
var b = [3, 4, 5, 6, 7]
function findSame(arr1, arr2) {
  let path = []
  arr1 = [...new Set(arr1)]
  arr1.forEach(item => {
    if(arr2.includes(item)){
      path.push(item)
    }
  });
  return path
}

console.log(...new Set(a))
