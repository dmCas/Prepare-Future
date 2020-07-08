// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// abcabcbb -> 3

/**
 * @param {string} s
 * @return {number}
 */
var s = 'abcabcbb'
var lengthOfLongestSubstring = function(s) {
  var s = s.split('')
  console.log(s)
};
lengthOfLongestSubstring(s)