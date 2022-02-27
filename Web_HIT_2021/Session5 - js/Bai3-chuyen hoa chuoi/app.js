const a = '     1hel3o  ban     nho4 4  hahaha     '
// convert(a)
console.log(convert(a))

const case1 = "    hOang Bui   ";
console.log(convert(case1))

const case2 = " hOANG      BUI   hOang     ";
console.log(convert(case2))
const case3 = "23traN    dUOng23     ";
console.log(convert(case3))


function convert(a){
    a = a.trim()
    const s =a.replace(/[0-9]/g,'')
    const b =  s.replace(/\s+/g,' ')
    let c=''
    for(let i in b){
        if(b[i-1]==' '&&b[i]!=' '||i==0)
            c+= b[i].toUpperCase()
         else if(!(b[i-1]==' '&&b[i]!=' '||i==0) && b[i] !=' ')
            c+=b[i].toLowerCase()
        else c+=' '
    }
    return c
}