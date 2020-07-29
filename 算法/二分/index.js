var arr = [1, 3, 19, 30, 31]

// 迭代写法
// function findIndex(arr, target) {
//     let left = 0
//     let right = arr.length - 1 // 4
//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2) 
//         if(target == arr[mid]) {
//             return mid
//         }
//         else if(target < arr[mid]) {
//             right = mid - 1
//         }
//         else {
//             left = mid + 1
//         }

//     }
//     return -1
// }

// console.log(findIndex(arr, 31))


// 递归写法

function findIndex(arr, target, start = 0, end = arr.length - 1) {
    let mid = Math.floor((start + end) / 2)
    if(start > end){
        return -1
    }
    if(target == arr[mid]) {
        return mid
    }
    if(target < arr[mid]) {
        return findIndex(arr, target, start, mid-1)
    }
    else {
        return findIndex(arr, target, mid+1, end)
    }
}

console.log(findIndex(arr, 31))