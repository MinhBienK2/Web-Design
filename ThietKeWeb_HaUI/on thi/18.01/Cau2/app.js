const hovaten = document.querySelector('#hovaten')
const ten = document.querySelector('#ten')
const result = document.querySelector('#result')
const huy = document.querySelector('#huy')

result.onclick  = () => {
    const test =hovaten.value
        .trim()
        .split(' ').pop()
    ten.value = test
}

huy.onclick =function(){
    hovaten.value = ""
    tentar.value = ""
}