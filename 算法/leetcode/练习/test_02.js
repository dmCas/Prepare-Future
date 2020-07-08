var arr = [1,1,1,3,5,9,17]

function findData(arr ,n) {
  if(n<=3) return n
  let newArr = []
  newArr[0] = arr[0]
  newArr[1] = arr[1]
  newArr[2] = arr[2]
  for(let i=3; i<n;i++) {
    sum = newArr[0] + newArr[1] + newArr[2]
    newArr.shift()
    newArr.push(sum)
  }
  return newArr[2]
}

console.log(findData(arr,10))