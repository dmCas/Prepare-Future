// 冒泡排序 (n - 1) + (n - 2) + ... + 1

var arr = [2, 3, 7, 5, 4, 6]

function swiper(arr, a, b){
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function bubbleSort(arr) {
  let len = arr.length
  for(let j = 0 ; j < len; j++) {
    for(let i = 0; i < len-j; i++) {
      if(arr[i] > arr[i+1]) {
        swiper(arr, i, i+1)
      }
    }
  }
  console.log(arr)
  return arr
}

function quickSort(arr) {
  if(arr.length < 1) return arr
  let povitIndex = Math.floor(arr.length / 2)
  let povit = arr.splice(povitIndex, 1)[0]
  let left = []
  let right = []
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] <= povit) {
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([povit],quickSort(right))

}

console.log(quickSort(arr))