function loadProduct(pno,pageSize){
	$.ajax({
		type:"get",
		url:"data/product_lol.php",
		async:true,
		data:{pno:pno,pageSize:pageSize},
		success:function(data){
//			console.log(data);
			var html="";
			for(var p of data.data){
				html+=`<dl>
						<dt>
							<a href="${p.href}"><img src="${p.img}"/></a>
						</dt>
						<dd>
							<a href="${p.href}"><strong>${p.title}</strong></a>
							<div>Q币价： <span>&nbsp;&nbsp;&nbsp;${p.price}</span><span> Q币</span></div>
							<div>微信价：<span>&nbsp;&nbsp;&nbsp;￥</span><span>${p.vxprice}</span></div>
							<div><a href="" title="立即购买">立即购买</a></div>
						</dd>
					</dl>`;
			}
			$("#lol_product4").html(html);
			
			
			var html=`<a href="javascript:;" class="shang"><i></i>上一页</a>`;
			for(var i=1;i<=data.pageCount;i++){
				html+=`<a href="javascript:;" class=${i==pno?"active":""}>${i}</a>`;
			}
			html+=`<a href="javascript:;" class="xia">下一页<i></i></a>`;
			$("#fenye").html(html);				
			var shang = $("#fenye>a:first-child");
//			console.log(shang);
			var xia = $("#fenye>a:last-child");
//			console.log(pno);
//			console.log(data.pageCount);
			if(pno==1){
				shang.addClass("disabled");
			}else{shang.class="shang";}			
			if(pno==data.pageCount) xia.addClass("disabled");
			else xia.class = "xia";
		},
		 error:function(){alert("网络故障请检查！")}
	});
}
loadProduct(1,8);
$(()=>{
	$("#fenye").click(function(e){
		if(e.target.nodeName=="A"){
			var a=e.target;
			if(!/disabled/.test(a.className)){
				if(/shang|xia/.test(a.className)){
					var i = parseInt($("#fenye>a.active").html());					
					if(a.className=="shang"){
						loadProduct(i-1,8);
					}else{
						loadProduct(i+1,8);
					}
				}else{
					loadProduct(a.innerHTML,8);
				}
			}
		}
	});
})
$(()=>{
	$.ajax({
		type:"get",
		url:"data/lol_remen.php",
		async:true,
		success:function(data){
			var html="";
			for(var p of data){
				html+=`<li><a href="${p.href}">
									<div>0${p.lid}</div>
									<div><img src="${p.img}"/></div>
									<div>										
										<p>${p.title}</p>
										<p>Q币价：${p.price} Q币</p>
										<p>微信价 <strong>￥${p.vxprice}</strong></p>
									</div>
								</a>
							</li>`;
			}
			$("#lol_remen").html(html);
		}
	});
})
$(()=>{
	$.ajax({
		type:"get",
		url:"data/lol_remen.php",
		async:true,
		success:function(data){
			var html="";
			for(var i=4;i<6;i++){
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
			$("#lol_remen1").html(html);
		}
	});
})
$(()=>{
	$.ajax({
		type:"get",
		url:"data/zhoubian.php",
		async:true,
		success:function(data){
			var html="";
			for(var i=0;i<3;i++){
				var p=data[i];
				html+=`<li class="fl">
					<div>
						<a href="" class="fl">
							<img src="${p.img}" alt="" />
						</a>
						<div class="fl">
							<p class="p1"><a href="">${p.title}</a></p>
							<p class="p2">商城价<span>￥${p.price}</span></p>
						</div>
					</div>
				</li>`;
			}
			$("#zhoubian").html(html);
		}
	});
})

			
		