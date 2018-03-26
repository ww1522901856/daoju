function loadCart(){
	$.getJSON("data/cart/get.php")
		.then(data=>{
		var html="";
		var selected=0;
		var total=0;
//		console.log(data);
		for(var item of data){
			html+=`<tr style="border-top: 1px dotted #DEDFDE">
							<th class="check">
								<input type="checkbox" data-iid="${item.iid}" ${item.is_checked==1?"checked":""}/>	
							</th>
							<td style="text-align: center;">
								<a href=""><img src="${item.pic}" alt="" /></a>
								<a href="">${item.title}</a>
							</td>
							<td>
								<span>皮肤</span>
							</td>
							<td>
								<span>${item.price}</span>Q币
							</td>
							<td>
								永久
							</td>
							<td class="reduce">
								<a href="javascript:;" class="jian" data-iid="${item.iid}">-</a>
								<input type="text" value="${item.count}" class="shu">
								<a href="javascript:;" class="jia" data-iid="${item.iid}">+</a>
							</td>
							<td>
								<span>无折扣</span>
							</td>
							<td>
								<span>${item.count*item.price}</span> Q币
							</td>
							<td>
								<a href="#">关注</a>
								<a href="#" data-iid="${item.iid}" class="del">删除</a>
							</td>
						</tr>	`;
			if(item.is_checked==1){
				total+=item.price*item.count;
				selected+=parseInt(item.count);				
			}
			
		}
		$("#shifu").html(total.toFixed(2));
		$("#cart_table").html(html);
		if(data.some(function(item){return item.is_checked==0})||data.lebgth==0){
			if($(".check-top>input").attr("checked")){
				$(".check-top>input").removeAttr("checked");				
			}			
		}else{			
				$(".check-top>input").attr("checked","true");
				console.log(1);			
		}
		
	})
}
//loadCart();
$(()=>{
	loadCart();
	$("#cart_table").on("click",".del",e=>{
		e.preventDefault();
		if(confirm("是否继续删除？")){
			var $a=$(e.target);
			var iid=$a.data("iid");
//			console.log(iid);
			$.get("data/cart/delete.php",{iid}).then(()=>{
				loadCart();
			});
		}
	}).on("click",".jian,.jia",e=>{
		e.preventDefault();
		var $a = $(e.target);
		var iid = $a.data("iid");
		var count = parseInt($a.siblings("input").val());
//		console.log(count);
		if($a.is(".jia")){
			count++;
		}else{
			count--;	
			}
		if(count==0){
			$.get("data/cart/delete.php",{iid}).then(()=>{
				loadCart();
			});
		}else{
			$.get("data/cart/update.php",{iid,count}).then(()=>{
				loadCart();
			})	
		}				
	}).on("click",".check>input",e=>{
		var $input = $(e.target);
		var iid = $input.data("iid");
		var checked = $input.attr("checked")?0:1;
//		console.log(iid);
//		console.log(checked);
//		console.log(10);
		$.get("data/cart/check.php",{iid,checked}).then(()=>{
			loadCart();
		})
	})
	$(".check-top>input").click(e=>{
		var $input =$(e.target);
		var checked = $input.attr("checked")?0:1;
//		console.log(checked);
		$.get("data/cart/chackAll.php",{checked}).then(()=>{
			loadCart();
		})
	})
})

//$(".check-top>input").attr("checked","checked");
//$(".check-top>input").removeAttr('checked');