(()=>{
	$.ajax({
		type:"get",
		url:"data/lol_remen.php",
		async:true,
		success:function(data){
			var html="";
			for(var i=0;i<4;i++){
				var p=data[i];
				html+=`<li><a href="${p.href}">									
									<div><img src="${p.img}"/></div>
									<div>										
										<p>${p.title}</p>
										<p>Q币价：${p.price} Q币</p>
										<p>微信价 <strong>￥${p.vxprice}</strong></p>
									</div>
								</a>
							</li>`;
			}
			$("#cai1").html(html);
			
			var html="";
			for(var i=4;i<8;i++){
				var p=data[i];
				html+=`<li><a href="${p.href}">									
									<div><img src="${p.img}"/></div>
									<div>										
										<p>${p.title}</p>
										<p>Q币价：${p.price} Q币</p>
										<p>微信价 <strong>￥${p.vxprice}</strong></p>
									</div>
								</a>
							</li>`;
			}
			$("#cai2").html(html);
		},
		error:function(){
			alert("网络故障，请检查！");
		}
	});
	$.ajax({
		type:"get",
		url:"data/product_details.php",
		data:location.search.slice(1),
		success:function(data){
			console.log(data);
			var html="";
//			console.log(data);
			html+=`<div class="top10">
				<div>
					<div class="left-img fl">
						<div><img src="${data.img}" alt="" /><i></i></div>
						<p class="fl">收藏商品</p>
					</div>
					<div class="right-img fl">
						<h2>${data.title}</h2>
						<div>
							<p>Q币价 : ${data.price} Q币</p>
							<p>微信价 : <b>￥${data.vxprice}</b> </p>
						</div>
						<p class="p100">期限 : 永久</p>
						<p class="p101"><a href="javascript:;" class="fl a1" data-lid="${data.lid}" id="jiacart">加入购物车</a>	<a href="#" class="fl a2">赠送</a></p>
					</div>
				</div>
			</div>
			<div class="bottom10">
				<div class="comico">
					<a href="" class="focus">商品详情</a>
					<a href="" class="mobile">手机购买<i></i>
						<div><img src="img4/code.png" alt="" /></div>
					</a>
				</div>
				<div class="goods_tab_0">
					<p>${data.title}</p>
				</div>
				<div class="comico"><a href="" class="focus">道具视屏</a></div>
				<div class="goods_tab_1">
					<div>
						<img src="${data.video}" alt="" />
					</div>
				</div>
			</div>`;
			$("#details").html(html);
			$("#jiacart").click(e=>{
				e.preventDefault();
//				console.log(1);				
				var $a=$(e.target);
				var lid = $a.data("lid");
				console.log(lid);
				$.get("data/cart/insert.php",{lid}).then(()=>{
					alert("添加成功！");
				})
	})
		},
		error:function(){
			alert("网络故障，请检查！");
		}
	});
	
})();