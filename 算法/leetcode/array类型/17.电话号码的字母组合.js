/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

const map = new Map()
            .set('2', ['a', 'b', 'c'])
            .set('3', ['d', 'e', 'f'])
            .set('4', ['g', 'h', 'i'])
            .set('5', ['j', 'k', 'l'])
            .set('6', ['m', 'n', 'o'])
            .set('7', ['p', 'q', 'r', 's'])
            .set('8', ['t', 'u', 'v'])
            .set('9', ['w', 'x', 'y', 'z'])
            console.log(['a' + 'g'])
var letterCombinations = function(digits) {
    var arr = digits.split('');
    let path = [];
    let len = 1;
    for(let i = 0; i < arr.length; i++) {
        console.log(map.get(arr[i]))
        len = (map.get(arr[i])).length * len
    }
    for(let j = 0; j < len; j++) {
        
    }
    return path
};
// @lc code=end

