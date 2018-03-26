(()=>{
	$.ajax({
		type:"get",
		url:"./data/lol_carousel.php",		
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var p=data[i];
				html+=`<div class="dev"><a href="${p.href}"><img src="${p.img}" alt="" /></a></div>`;
			}
			$("#pic_lol").html(html);
			var html="";
			for(var i=0;i<data.length;i++){
				var p=data[i];
				html+=` <a class="curr" href="javascript:;">${p.title}</a>`;
			}
			$("#dot").html(html);
			
//			轮播代码
			var sWidth = $("#slide").width();
			var len = $("#slide .pic img").length;
			var index=0;
			var picTimer;
			var showPics = function(index){
				var nowLeft = -index*sWidth;
				$("#slide .pic").stop(true,false).animate({"left":nowLeft},300);
				$("#slide .dot a").removeClass("curr").eq(index).addClass("curr");
			};
			var init = function(){
				$("#slide .dot a").mouseenter(function(){
					index = $("#slide .dot a").index(this);
					showPics(index);
				}).eq(0).trigger("mouseenter");
				$("#slide").hover(function(){
					clearInterval(picTimer);
				},function(){
					picTimer = setInterval(function(){
						showPics(index);
						index++;
						if(index == len){index = 0};
					},4000);
				}).trigger("mouseleave");
			};init();
		},
		error:function(){
			alert("网络故障，请检查！")
		}
	});
})();
(()=>{
	$.ajax({
		type:"get",
		url:"data/lol_product.php",
		success:function(data){
			var html="";
			for(var i=0;i<8;i++){
				var p=data[i];
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
		},
		error:function(){
			alert("网络故障，请检查！")
		}
	});
})();

(()=>{
	$.ajax({
		type:"get",
		url:"data/lol_remen.php",
		async:true,
		success:function(data){
			var html="";
			for(var i=0;i<4;i++){
				var p = data[i];
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
				$("#lol_remen1").html(html);
		},
		error:function(){
			alert("网络故障，请检查！");
		}
	});
})();
(()=>{
	$.ajax({
		type:"get",
		url:"data/zhoubian.php",
		async:true,
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var p=data[i];
				html+=`<li><a href="${p.href}">
							<div><img src="${p.img}" alt="" /></div>
							<div>
								<p>${p.title}</p>
								<p>￥${p.price}</p>
							</div>
						</a></li>`;
			}
			$("#zhoubian").html(html);
		}
	});
})();
(()=>{
	$.ajax({
		type:"get",
		url:"data/huodong.php",
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var p=data[i];
				html+=`<li>
						<div>
							<a href="${p.href}">
								<div>
									<div>
										<div></div>
										<div>英雄联盟</div>
									</div>
									<div>火爆<br>进行中</div>
									<img src="${p.img}" alt="" />
								</div>
							</a>
							<div>
								<div>${p.title}</div>
								<p>活动时间：${p.date}~${p.jdate}</p>
								<div>
									<i></i>
									<span><shrong>(${p.zan})</shrong></span>
								</div>
							</div>
						</div>
					</li>`;
			}
			$("#huodong").html(html);
			
		},
		error:function(){
			alert("网络故障，请检查！");
		}
	});
})();
