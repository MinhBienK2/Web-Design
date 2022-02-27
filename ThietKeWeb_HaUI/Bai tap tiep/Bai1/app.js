const text = document.querySelector('#text');
const text1 = document.querySelector('#text1');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

result.onclick = function(e){
    // console.log(text.value.split(','))
    let arr1 = text.value.split(',')
    chuyenHoa(arr1)
    console.log(arr1)
    text1.value = arr1
}
reset.onclick = function() {
    text.value = ''
    text1.value = ''
}

function chuyenHoa(arr){
    for(let i=0;i<arr.length;i++){
         for(let j=i+1;j<arr.length;j++){
            if(parseInt(arr[i])==parseInt(arr[j])){
                arr.splice(j,1);
            }
        } 
    }         
}