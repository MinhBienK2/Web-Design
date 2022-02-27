const input = document.querySelector('#input');
const result = document.querySelector('#result')
const dem = document.querySelector('#dem')
const huybo = document.querySelector('#huybo')

// console.log(input,result,dem,huybo)

dem.onclick = () => {
    //  result.value = input.value.split('').filter(ele =>{
    //     return parseInt(ele) %2 !=0
    // }).join(',')
    let count =0;
    input.value.split('').forEach(ele =>{
        if(parseInt(ele) %2 !=0)
            count ++;
    })
    result.value = count
}

huybo.onclick = () => {
    input.value = ''
    result.value = ''
}