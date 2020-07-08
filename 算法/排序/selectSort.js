// 选择排序
var arr = [0, 3, 5, 8, 9, 2, 1]

function swiper(arr, a, b){
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function insertSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    var min = i
    for(let j = min+1; j<arr.length; j++){
      if(arr[min] > arr[j]) {
        min = j
      }
    }
    swiper(arr, min, i)
  }
  return arr
}

console.log(insertSort(arr))