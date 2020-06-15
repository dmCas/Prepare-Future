// 寻找两个正序数组的中位数
// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5

var findMedianSortedArrays = function (nums1, nums2) {
  // 排序算法
  var nums = nums1.concat(nums2) // 2 4 1 3
  var len = nums.length
  // for(let i = 0; i < len;i++){
  //   for(let j= i+1 ; j < len;j++){
  //     if(nums[i] > nums[j]){
  //       let temp = nums[i]
  //       nums[i] = nums[j]
  //       nums[j] = temp // 1 4 2 3 . 1 2 4 3 . 1 2 3 4
  //     }
  //   }
  // }
  for(let i = 0; i < len; i++) {
    
  }
  return nums
};

findMedianSortedArrays([2, 3], [4, 1])