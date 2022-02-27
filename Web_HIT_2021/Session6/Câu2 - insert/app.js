const a = [1,2,3]
const b = [0]
const c = [9]
const d = [1,9,9]

console.log(insert(a))
console.log(insert(b))
console.log(insert(c))
console.log(insert(d))
console.log(insert(f))

function insert(arr){
    return (parseInt(arr.join(''))+1).toString().split('').map(ele => parseInt(ele))
}