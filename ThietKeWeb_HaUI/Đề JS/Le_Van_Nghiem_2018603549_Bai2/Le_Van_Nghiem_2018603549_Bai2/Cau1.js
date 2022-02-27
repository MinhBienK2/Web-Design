function checkHoTen()
			{
				var hoten=document.getElementById('hoten').value;
				var reg=/^\D+$/;
				if(reg.test(hoten)==false)
				{
					document.getElementById('hoTenError').innerHTML="Họ tên không chứa chữ số";
					document.getElementById('hoten').style.outline='2px solid red';
                    document.getElementById('hoten').focus();
				}
                else{
                    document.getElementById('hoTenError').innerHTML="";
					document.getElementById('hoten').style.outline='none';
                }
			}
			function checkPass()
			{
                var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
				var pass=document.getElementById('pass').value;
                if(reg.test(pass) == false)
                {
                    document.getElementById('passwordError').innerHTML=("Password không đúng định dạng");
					document.getElementById('pass').style.outline='2px solid red';
                    document.getElementById('pass').focus();
                }
                else
                {
                    document.getElementById('passwordError').innerHTML="";
					document.getElementById('pass').style.outline='none';
                }
				
			}
            function checkRePass()
            {
                var pass=document.getElementById('pass').value;
				var repass=document.getElementById('repass').value;
                if(pass!=repass)
                {
                    document.getElementById('rePasswordError').innerHTML="Khẳng đinh mật khẩu không khớp";
                    document.getElementById('repass').style.outline = '2px solid red';
                    document.getElementById('repass').focus();//neu sai con tro chuột k chuyển sang ô khác đc
                }
                else
                {
                    document.getElementById('rePasswordError').innerHTML="";
					document.getElementById('repass').style.outline='none';
                }
            }
			function checkSDT()
			{
				var sdt=document.getElementById('sdt').value;
				reg=/^[\d|()|-]/g;
				if(reg.test(sdt)==false)
					{
						document.getElementById('sdtError').innerHTML="Số điện thoại chỉ chứa chữ số, (), -";
						document.getElementById('sdt').style.outline='2px solid red';	
					}
                else{
                    document.getElementById('sdtError').innerHTML="";
					document.getElementById('sdt').style.outline='none';
                }
			}// JavaScript Document