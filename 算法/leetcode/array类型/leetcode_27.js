/** 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var nums = [3, 2, 2, 3]
var val = 3

var removeElement = function(nums, val) {
    let path = []
    nums.forEach(element => {
        if (element != val) {
            path.push(element)
        }
    });
    return path
};

console.log(removeElement(nums, val))