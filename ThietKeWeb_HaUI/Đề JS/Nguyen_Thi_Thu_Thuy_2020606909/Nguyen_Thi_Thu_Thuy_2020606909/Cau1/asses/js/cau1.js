let name = '';
let pass = '';
let confirmPass = '';
let date = '';
let phone = '';

const reset = document.querySelector('#reset');
console.log(reset)

const handleChangeName = (e) => {
    name = e.target.value;
}
const handleChangePass = (e) => {
    pass = e.target.value;
}
const handleChangeConfirmPass = (e) =>  {
    confirmPass = e.target.value;
}
const handleChangePhone = (e) => {
    phone = e.target.value;
}
const handleChangeDate = (e) => {
    date = e.target.value;
}
    
const handleSubmit = () => {
    let error = '';
    if(/^[1-9]+$/.test(name)) {
        error += 'Tên không được sử dụng chữ số!. ' 
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(pass)) {
        error += 'Mật khẩu phải có ít nhất một chữ hoa, một chữ thường, một ký tự đặc biệt!. '; 
    }
    if(pass.length <= 6) {
        error += 'Mật khẩu phải có độ dài lớn hơn 8 ký  tự!. '; 
    }
    if(pass !== confirmPass) {
        error += 'Xác nhận mật khẩu chưa khớp!. '
    }
    if(!/^\d+$/.test(phone)) {
        error += 'Số điện thoại không được dùng chữ cái và ký tự đặc biệt!. ';
    }
    if(!date) {
        error += 'Ngày tháng năm sinh bắt buộc nhập!. ';
    }
    if(error !== '') {
        alert(error);
    } else {
        alert('Chúc mừng bạn đã hoàn thành yêu cầu <3');
    }
}

reset.onclick = function () {
    
}