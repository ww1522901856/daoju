(()=>{
	ajax({
		type:"get",
		url:"menu.html"
	}).then(html=>{
		$(".menu").html(html);
	})
	$.getJSON("data/cart/get.php").then(data=>{
		var zong=0;
		for(var item of data){
			var a = Number(item.count);
			zong+=a;
		}
//		console.log(zong);
		$(".cartcount>i").html("(&nbsp;"+zong+"&nbsp;)");
	})
})();