/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ''
    let path = []
    let firstWord = strs.splice(0,1)[0].split('') // [ 'f', 'l', 'o', 'w', 'e', 'r' ]
    var newStrs = strs.map(item => ( // flow flight
        item = item.split('')
    ));
    for(let i = 0, len = firstWord .length; i < len; i++) {
        if (newStrs.every(element => (element[i] === firstWord[i]))) {
            path.push(firstWord[i])
        }else{
            break;
        }
    }
    if (path.length > 0) {
        return path.join('')
    }
    else {
        return ''
    }
};