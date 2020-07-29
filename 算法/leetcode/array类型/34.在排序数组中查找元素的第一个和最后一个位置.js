/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while(start < end) {
        let mid = Math.floor((start + end) / 2)
        if (target == nums[mid]) {
            return 
        }
    }
};
// @lc code=end

