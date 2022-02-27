const so1 = document.querySelector('#so1')
const so2 = document.querySelector('#so2')
const result = document.querySelector('#result')
const tim = document.querySelector('#tim')
const huy = document.querySelector('#huy')

console.log(so1,so2,result,tim ,huy)

tim.onclick = () => {
    for(let i=so2.value;i>0;i--)
        if(parseInt(so1.value)%i==0 && parseInt(so2.value)%i==0){
            result.value= i
            return 
        }
}

huy.onclick = () => {
    so1.value=""
    so2.value=""
    result.value=""
}