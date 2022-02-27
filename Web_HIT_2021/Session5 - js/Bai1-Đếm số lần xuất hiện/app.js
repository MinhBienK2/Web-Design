const result = document.querySelector('#result')
const text = document.querySelector('#text')
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
console.log(text)
result.onclick = function() {
    // console.log(text.value.split(/[,\s]+/g).filter(ele=>{
    //     return ele!=''
    // }),text.value.split(/[,\s]+/g).filter(ele=>{
    //     return ele!=''
    // }).length)
   alert(kt(text.value.split(/[,\s]+/g).filter(ele=>{
        return ele!=' '
    })))
    console.log(kt(nums))
    console.log(kt(nums2))
    console.log(kt(nums1))
}

function kt(a) {
    let sum=''
    for(let i=0;i<a.length;i++){
        let s= a[i]
        let count=0
        for(let j =0;j<a.length;j++){
            if(s== a[j]) {
                a.splice(j,1)
                count++;
                j--
            }
        }  
        sum+=(`số ${s} có ${count} xuất hiện\n`)
        i--;
    }
    return sum
}


