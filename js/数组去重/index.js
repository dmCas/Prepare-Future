// var arr = ['20', 'hello', {name: 'jack'}, {name: 'jack'}];
// console.log([...new Set(arr)]) // 只能去掉基本数据类型，对于引用数据类型是无法去重的

// function clearSame(arr) {
//     var path = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (path.indexOf(arr[i]) < 0) {
//             path.push(arr[i])
//         }
//     }
//     console.log(path)
// }   
// clearSame(arr)

var arr = ['20', 'hello', {name: 'jack'}, {name: 'jack'}];
function clearSame2(arr) {
    var arr2 = []
    const path = new Map()
    for (let i = 0; i < arr.length; i++) {
        if(path.has(arr[i])){
            path.set(arr[i], true) // 对象作为键值当时候默认调用toString
        }else {
            path.set(arr[i], false)
            arr2.push(arr[i])
        }
    }
    console.log(arr2)
}   

clearSame2(arr)