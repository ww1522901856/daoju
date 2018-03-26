(()=>{
	$("#tijiao").click(function(e){
		e.preventDefault();
		var u = $("#uname").val();
		var p = $("#upwd").val();
		var h = $("#phone").val();
		var reg = /^[a-zA-Z0-9]{3,12}$/;
		if(!reg.test(u)){
            alert("用户名格式不正确，请检查");
            return;
        }
        if(!reg.test(p)){
            alert("密码格式不正确，请检查");
            return;
        }
        var regh = /^[0-9]{11}$/;
        if(!reg.test(h)){
            alert("手机号格式不正确，请检查");
            return;
        }
        $.ajax({
        	type:"GET",
        	url:"data/register.php",
        	data:{uname:u,upwd:p,phone:h},
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
