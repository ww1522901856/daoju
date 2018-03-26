(()=>{
    $("#shanchu").click(function(){
        location=document.referrer;
    });
})();
(()=>{
	$("#tijiao").click(function(e){
        e.preventDefault();//阻止事件默认行为
        var u=$("#uname").val();
        var p=$("#upwd").val();
        var yzm=$("#yzm").val();
        var reg=/^[a-zA-Z0-9]{3,12}$/;
        if(!reg.test(u)){
            alert("用户名格式不正确，请检查");
            return;
        }
        if(!reg.test(p)){
            alert("密码格式不正确，请检查");
            return;
        }
        var regYzm=/^[a-z]{4}$/i;
        if(!regYzm.test(yzm)){
            alert("验证码格式不正确，请检查");
            return;
        }
        var regYzm=/^[a-z]{4}$/i;
        if(!regYzm.test(yzm)){
            alert("验证码格式不正确，请检查");
            return;
        }
        $.ajax({
            type:"get",
            url:"data/login.php",
            data:{uname:u,upwd:p,yzm:yzm},
            success:function(data){              
                console.log(data);
                if(data.code>0){
                    alert(data.msg);
                    location=document.referrer;    
                }else{
                    alert(data.msg);
                }
            },
            error:function(){
                alert("网络故障请检查");
            }
        })
        
    })
})();
