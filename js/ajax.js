function ajax({
	url,//请求地址，不带"?"
	type,//请求类型：get/post
	data,//请求参数
	dataType,//text/html/json
	}){//callback,type,url,data,dataType
	return new Promise(function(callback){
		var xhr=null;
		//2.设置回调函数
		if(window.XMLHttpRequest){
			//标准创建
		 xhr=new XMLHttpRequest();
			}else{
			//IE8以下
			xhr=new ActiveXObject("Microsoft.XMLHttp");
			}
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var res=xhr.responseText;
				if(dataType!==undefined&&dataType.toLowerCase()==="json")
					res=JSON.parse(res);
					callback(res);
			}
		}
		if(type.toLowerCase()==="post")
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		if(data!==undefined&&type.toLowerCase()==="get"){url+="?"+data;}
		xhr.open(type,url,true);//3.创建请求
		//4.发送请求
		if(data!==undefined&&type.toLowerCase()==="post")
			xhr.send(data);
		else
			xhr.send(null);
	});
} 