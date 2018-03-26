


$(()=>{
//	$.ajax({
//		type:"get",
//		url:"header.html"
//	}).then(html=>{
//		$("#header").html(html);
	if(location.pathname.endsWith("cart.html")){
			$.get("data/users/isLogin.php")
				.then(data=>{
				if(data.ok==0){
				confirm("请先登录！");
				location="login.html";
				}
			})
		}




	$("#header").load("header.html",function(){
		$.getJSON("data/users/isLogin.php").then(data=>{
			if(data.ok===0)
				$("#unlogin").show().next().hide();				
			else{
				$("#unlogin").hide().next().show();				
				$("#uname").html(data.user_name);				
			}
		})
		$("#logout").click(function(){
			$.get("data/users/logout.php").then(()=>{
				$("#unlogin").show().next().hide();
			});
			location.reload(true);
		})
	});	
});

	
