const a = "tranduong"
const b = "hitclubhiuhiu"
const c = "aabb"
kt(a)
kt(b)
kt(c)

function kt(str){
    if(findChar(str) == undefined)
        console.log(-1)
    else console.log(findChar(str))
}

function findChar(str){
    for(let i=0; i<str.length; i++){
        if(!str.replace(str[i],' ').includes(str[i]))
            return i 
    }
}