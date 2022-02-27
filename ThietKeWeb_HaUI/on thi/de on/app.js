const password = document.querySelector('#password');
const username = document.querySelector('#username');
const registration = document.querySelector('#registration');

const passwordRegex = /^(?=.*[A-Z])([0-9a-zA-Z]){8,}$/
console.log(password , username , registration)

registration.onclick = () => {
    if(password.value =='' && username.value =='')
        alert("Ban chua nhap username va password")
    else if(password.value =='')
        alert("ban chua nhap mat khau")
    else if(username.value =='')
        alert("ban chua nhap username")
    if(passwordRegex.test(password.value)){
        alert("THanh cong")
        password.value = ''
        username.value = ''
    }
    else 
        alert("Password khong hợp lệ")
}