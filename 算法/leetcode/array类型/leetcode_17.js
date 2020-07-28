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
            .set('2', 'abc')
            .set('3', 'def')
            .set('4', 'ghi')
            .set('5', 'jkl')
            .set('6', 'mno')
            .set('7', 'pqrs')
            .set('8', 'tuv')
            .set('9', 'wxyz')
var letterCombinations = function(digits) {
    let path = [''];
    for (let i of digits) {
        let nextResult = []
        let str = map.get(i) // ['a', 'b', 'c'], ['d', 'e', 'f']
        for (let j of path) {
            for (let s of str) {
                nextResult.push(j+s)// 'a', 'b', 'c'
            }
        }
        path = nextResult
    }
    return path
};
console.log(letterCombinations('239'))

// @lc code=end

