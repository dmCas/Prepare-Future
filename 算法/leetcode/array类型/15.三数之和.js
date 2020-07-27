/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var removeRepeat = function (arr) {
    let res = {}
    arr.forEach(item => {
        item.sort((a, b) => a - b);
        res[item] = item;
    });
    return Object.values(res)
}

var threeSum = function (nums) {
    var nums = nums.sort((a, b) => a - b)
    let arr = []
    let len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let path = []
            path.push(nums[i]) // -1
            path.push(nums[j]) // -1 0
            let target = 0 - (nums[i] + nums[j])
            // console.log(target)
            if (nums.slice(j + 1).indexOf(target) > -1) {
                path.push(nums[nums.slice(j + 1).indexOf(target) + j + 1])
                arr.push(path)
            }
        }
    }
    let newArr = arr.map(item => item.sort((a, b) => a - b))
    return removeRepeat(Array.from(new Set(newArr)))
};

// @lc code=end

