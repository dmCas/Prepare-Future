// 快排
var a = [3, 5, 8, 9, 1, 6]

// function sort(array) {
//   quickSort(arr, 0, array.length - 1)
// }

// function swap(arr, left, right) {
//   let temp;
//   temp = arr[left]
//   arr[left] = arr[right]
//   arr[right] = temp
// }

// var quickSort = function (array, left, right) {
//   // 判断left 是否小于 right
//   if (left < right) {
//     // 数组的第一项和最后一项进行交换
//     swap(array, left, right)
//     // 随机取值，然后和末尾交换，这样比固定取一个位置的复杂度略低
//     let indexs = part(array, parseInt(Math.random() * (right - left + 1)) + left, right) 
//     quickSort(array, left, indexs[0])
//     quickSort(array, indexs[1]+1, right )
//   }
  
// }

// function part(array, left, right) {
//   let less = left - 1
//   let more = right
//   while (left < more) {
//     if(array[left] < array[right]) {
//       ++less;
//       ++left;
//     }else if(array[left] > array[right]) {
//       swap(array, --more, left)
//     } else {
//       left ++ 
//     }
//   }
//   // [比基准值小， 基准值， 比基准值大]
//   swap(array, right, more)
//   return [less, more]
// }

// function quickSort(arr) {
//   if(arr.length < 1) return arr
//   let pivotIndex = Math.floor(arr.length / 2); // 9
//   let pivot = arr.splice(pivotIndex, 1)[0]
//   let left = []
//   let right = []
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] < pivot) {
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right))
// }

var sortColors = function(nums) {
  if(nums.length < 1) return nums
  let pivotIndex = Math.floor(nums.length / 2)
  let pivot = nums.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for(var i = 0; i<nums.length; i++) {
      if(nums[i] <= pivot) {
          left.push(nums[i]) 
      }else{
          right.push(nums[i])
      }
  }
  return sortColors(left).concat([pivot], sortColors(right))
};

console.log(sortColors(a)) // 时间复杂度 O(logN)