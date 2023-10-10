const arr = [1,2]
arr.push(3)
console.log(arr)

const a = { val: 1 }
a.val = 10
console.log(a)

const str = true
Array.prototype.push = function (a) { return null; }
arr.push(10)
console.log(arr)