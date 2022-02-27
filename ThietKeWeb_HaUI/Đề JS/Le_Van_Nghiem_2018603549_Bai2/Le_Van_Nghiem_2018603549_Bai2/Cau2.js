function tinh()
        {
            var x=document.getElementById("x").value;
            var sum =0;
            for(var i=1; i<=x; i++)
            {
                if(i % 2 == 0 && i % 3 == 0)
                {
                    sum = sum + i;
                }
            }
            document.getElementById("ketQua").value=sum;
        }// JavaScript Document