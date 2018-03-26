(()=>{	
	$.ajax({
		type:"GET",
		url:"data/index_carousel.php",
		dataType:"json",
		success:function(data){
			var html = "";
			for(var i=0;i<data.length;i++){
				var p=data[i];
				html+=`<div class="dev">
					<a href=""><img src="${p.img}"></a>
					<s></s>
					<p>${p.title}</p>
				</div>`;
			}
			$("#pic").html(html);
			
			//轮播程序	
			var sWidth = $("#slide").width();
			var len = $("#slide .pic img").length;
			var index = 0;
			var picTimer;
			var showPics = function(index) {
				var nowLeft = -index*sWidth;
				$("#slide .pic").stop(true,false).animate({"left":nowLeft},300); 
				$("#slide .dot a").removeClass("curr").eq(index).addClass("curr"); 
			};
			//showPics();
			var init = function(){
				$("#slide .dot a").mouseenter(function() {
					index = $("#slide .dot a").index(this);
					showPics(index);
				}).eq(0).trigger("mouseenter");
				$("#slide .pic").css("width",sWidth * (len));
				$("#slide").hover(function() {
					clearInterval(picTimer);
				},function() {
					picTimer = setInterval(function() {
						showPics(index);
						index++;
						if(index == len) {index = 0;}
					},4000); 
				}).trigger("mouseleave");
			};init();
			
			/////////////
		},
		error:function(){
            alert("网络故障请检查");
        }
	})
})();

(()=>{
	$.ajax({
		type:"get",
		url:"data/index_remai.php",
		dataType:"json",
		success:function(data){
//			console.log(data);
			var html="";
			for(var i=0;i<6;i++){
				var d=data[i];
				html+=`<dl>
					<dt>
						<a href="#" title="${d.title}">
							<img src="${d.img}">
						</a>
					</dt>
					<dd>
						<p>
							<b>[${d.gamename}]</b>
							<a href="#" title="${d.title}">${d.title}</a>
						</p>
						<p>
							<b>${d.price}QB</b>
							<span>(
								<s>${d.yuanjia}QB</s>)
							</span>
						</p>
						<p>剩余时间：
							<b>0天2时6分25秒</b>
						</p>
						<a href="" title="立即抢购">立即抢购</a>
					</dd>
					<dd class="lastdd">
						直降
						<b>${d.yuanjia-d.price}QB</b>
					</dd>
				</dl>`;
			}
			$("#remai").html(html);
			var html = "";
			for(var i=7;i<data.length;i++){
				var d=data[i];
				html+=`<dl>
						<dt>
							<a href="#"><img src="${d.img}" alt=""></a>
						</dt>
						<dd>
							<p>
								<a href="">
									<b>[${d.gamename}]</b>
									${d.title}
								</a>
							</p>
							<p>商城价
								<b>${d.price}QB</b>
							</p>
						</dd>
					</dl>`;
			}
			$("#like").html(html);
		},
		error:function(){
            alert("网络故障请检查");
        }
	});
})();
(()=>{
	$.ajax({
		type:"get",
		url:"data/index_daoju_guangaoone.php",
		dataType:"json",
		success:function(data){
			var html="";
			for(var i=0;i<6;i++){
				var p=data[i];
				html+=`<li><a href="${p.href}" title="${p.title}"><img src="${p.img}" alt=""></a></li>`;
			}
			$("#guanggaoone").html(html);
			
					
			var html="";
			for(var i=6;i<data.length;i++){
				var p=data[i];
				html+=`<li><a href="${p.href}" title="${p.title}"><img src="${p.img}" alt=""></a></li>`;
			}
			$("#guanggaoone1").html(html);
			
		},
		error:function(){
			alert("网络故障");
		}
	});
})();
(()=>{
	$.ajax({
		type:"get",
		url:"data/index_product.php",
		dataType:"json",
		success:function(data){
			
			//lol
			var html="";
			for(var i=0;i<4;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}">
								<span>${p.title}</span>
								<span>微信价<b>${p.vxprice}元</b></span>
								<span>Q币价：${p.price}QB</span>
								<img src="${p.img}" alt="">
							</a>
						</li>`;
			}
			$("#lol_product1").html(html);
			
			var html="";
			for(var i=4;i<8;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}"><img src="${p.img}" alt=""></a>
							<div>
								<p><a href="">${p.title}</a></p>
								<p>微信价<b>${p.vxprice}元</b></p>
								<p>Q币价：${p.price}QB</p>
							</div>
						</li>`;
			}
			$("#lol_product2").html(html);
			
			var html =`<li class="top">
							<i>排行01</i>
							<div>
								<p><a href="${data[8].href}">${data[8].title}</a></p>
								<p><b>${data[8].price}QB</b></p>
							</div>
							<a href=""><img src="${data[8].img}" alt=""></a>
						</li>`;
			for(var a=2,i=9;i<13;i++,a++){
				var p = data[i];
				html+=`<li>
							<i>0${a}</i>
							<div>
								<p><a href="${p.href}">${p.title}</a></p>
								<p><b>${p.price}QB</b></p>
							</div>
							<a href=""><img src="${p.img}" alt=""></a>
						</li>`;
			}
			$("#lol_product3").html(html);
			
			//cf
			var html="";
			for(var i=13;i<17;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}">
								<span>${p.title}</span>
								<span>微信价<b>${p.vxprice}元</b></span>
								<span>Q币价：${p.price}QB</span>
								<img src="${p.img}" alt="">
							</a>
						</li>`;
			}
			$("#cf_product1").html(html);
			
			var html="";
			for(var i=17;i<21;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}"><img src="${p.img}" alt=""></a>
							<div>
								<p><a href="">${p.title}</a></p>
								<p>微信价<b>${p.vxprice}元</b></p>
								<p>Q币价：${p.price}QB</p>
							</div>
						</li>`;
			}
			$("#cf_product2").html(html);
			
			var html =`<li class="top">
							<i>排行01</i>
							<div>
								<p><a href="${data[21].href}">${data[21].title}</a></p>
								<p><b>${data[21].price}QB</b></p>
							</div>
							<a href=""><img src="${data[21].img}" alt=""></a>
						</li>`;
			for(var a=2,i=22;i<26;i++,a++){
				var p = data[i];
				html+=`<li>
							<i>0${a}</i>
							<div>
								<p><a href="${p.href}">${p.title}</a></p>
								<p><b>${p.price}QB</b></p>
							</div>
							<a href=""><img src="${p.img}" alt=""></a>
						</li>`;
			}
			$("#cf_product3").html(html);
			
			//剑灵jl
			var html="";
			for(var i=26;i<30;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}">
								<span>${p.title}</span>
								<span>微信价<b>${p.vxprice}元</b></span>
								<span>Q币价：${p.price}QB</span>
								<img src="${p.img}" alt="">
							</a>
						</li>`;
			}
			$("#jl_product1").html(html);
			
			var html="";
			for(var i=30;i<34;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}"><img src="${p.img}" alt=""></a>
							<div>
								<p><a href="">${p.title}</a></p>
								<p>微信价<b>${p.vxprice}元</b></p>
								<p>Q币价：${p.price}QB</p>
							</div>
						</li>`;
			}
			$("#jl_product2").html(html);
			
			var html =`<li class="top">
							<i>排行01</i>
							<div>
								<p><a href="${data[34].href}">${data[34].title}</a></p>
								<p><b>${data[34].price}QB</b></p>
							</div>
							<a href=""><img src="${data[34].img}" alt=""></a>
						</li>`;
			for(var a=2,i=35;i<39;i++,a++){
				var p = data[i];
				html+=`<li>
							<i>0${a}</i>
							<div>
								<p><a href="${p.href}">${p.title}</a></p>
								<p><b>${p.price}QB</b></p>
							</div>
							<a href=""><img src="${p.img}" alt=""></a>
						</li>`;
			}
			$("#jl_product3").html(html);
			
			//御龙yl
			var html="";
			for(var i=39;i<43;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}">
								<span>${p.title}</span>
								<span>微信价<b>${p.vxprice}元</b></span>
								<span>Q币价：${p.price}QB</span>
								<img src="${p.img}" alt="">
							</a>
						</li>`;
			}
			$("#yl_product1").html(html);
			
			var html="";
			for(var i=43;i<47;i++){
				var p = data[i];
				html+=`<li>
							<a href="${p.href}"><img src="${p.img}" alt=""></a>
							<div>
								<p><a href="">${p.title}</a></p>
								<p>微信价<b>${p.vxprice}元</b></p>
								<p>Q币价：${p.price}QB</p>
							</div>
						</li>`;
			}
			$("#yl_product2").html(html);
			
			var html =`<li class="top">
							<i>排行01</i>
							<div>
								<p><a href="${data[47].href}">${data[47].title}</a></p>
								<p><b>${data[47].price}QB</b></p>
							</div>
							<a href=""><img src="${data[47].img}" alt=""></a>
						</li>`;
			for(var a=2,i=48;i<52;i++,a++){
				var p = data[i];
				html+=`<li>
							<i>0${a}</i>
							<div>
								<p><a href="${p.href}">${p.title}</a></p>
								<p><b>${p.price}QB</b></p>
							</div>
							<a href=""><img src="${p.img}" alt=""></a>
						</li>`;
			}
			$("#yl_product3").html(html);
			
		},
		error:function(){
			alert("网络故障，请检查！");
		}
	});
	$(window).scroll(function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//		console.log(scrollTop);
		var offsetTop1 = $(".nei104").offset().top;
//		console.log(offsetTop1);
		if(offsetTop1<=scrollTop+innerHeight/2){
			$(".lift").show();
			$(".fanhui").show();
		}else{
			$(".lift").hide();
			$(".fanhui").hide();
		}
//		console.log(innerHeight);
		$(".dianti").each(function(i,floor){
			var $floor = $(floor);
			var offsetTop = $floor.offset().top;
			if(offsetTop<=scrollTop+innerHeight/2){
				$(".lift_list").children(":eq("+i+")").addClass("god")
						.siblings().removeClass("god");
			}
		})
	});
	$(".lift_list").children().click(function(){
		var $li=$(this);
		var i=$li.index();
		var offsetTop=$(".dianti:eq("+i+")").offset().top;
		$("html").stop(true).animate({
			scrollTop:offsetTop
		},500);
	})
})();



















