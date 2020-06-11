// arr [2, 7, 11, 15]

var arr = [3, 2,4]
function twoSum(arr, target) {
  for(let i = 0; i< arr.length; i++) {
    if(arr.slice(i+1).indexOf(target - arr[i]) > -1) {
      console.log(arr.slice(i+1))
      return [arr.indexOf(target - arr[i]), i]
    }
  }
}


console.log(twoSum(arr, 6))