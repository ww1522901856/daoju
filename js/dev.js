//var devs=document.querySelectorAll(".nei101_d2>.pic>.dev");
//var as=document.querySelectorAll(".nei101_d2>.dot>a");
//
//function dev1(){
//	var promise=new Promise(function(open){
//	setTimeout(
//		()=>{
//		for(var dev of devs){
//			dev.style.left="-770px";
//			}					
//			open();
//		},3000);
//		})
//		
//		return promise;
//		
//}
//
//function dev2(){
//	var promise=new Promise(function(open){
//	setTimeout(
//		()=>{
//		for(var dev of devs){
//			dev.style.left="-1540px";
//			}
//			open();
//		},3000);
//		})
//		return promise;
//}
//
//function dev3(){
//	var promise=new Promise(function(open){
//	setTimeout(
//	()=>{
//	for(var dev of devs){
//		dev.style.left="-2310px";
//		}
//	open();
//	},3000);
//	})
//	return promise;
//}
//
//function dev4(){
//	var promise=new Promise(function(open){
//	setTimeout(
//	()=>{
//	for(var dev of devs){
//		dev.style.left="-3080px";
//		}
//	open();
//	},3000);
//	})
//	return promise;
//}
//
//function dev5(){
//	var promise=new Promise(function(open){
//	setTimeout(
//	()=>{
//	for(var dev of devs){
//		dev.style.left="0px";
//		}
//	open();
//	},3000);
//	})
//	return promise;
//}
//
//setTimeout(()=>{
//dev1().then(dev2).then(dev3).then(dev4).then(dev5);},0);
//setInterval(()=>{
//dev1().then(dev2).then(dev3).then(dev4).then(dev5);},15000);
(()=>{
			//data-onload=initFlash
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
			};
			init();
		})();




//轮播2
//var sWidth = $("#blk_index_main_focus").width();
//		var len = $("#blk_index_main_focus .pic img").length;
//		var index = 0;
//		var picTimer;
//		$("#blk_index_main_focus .pic").css("width", sWidth * (len));
//		$("#blk_index_main_focus").hover(function () {
//			clearInterval(picTimer);
//		}, function () {
//			picTimer = setInterval(function () {
//				showPics(index);
//				index++;
//				if (index == len) {
//					index = 0;
//				}
//			}, 2000);
//		}).trigger("mouseleave");
//
//		function showPics(index) {
//			var nowLeft = -index * sWidth;
//			$("#blk_index_main_focus .pic").stop(true, false).animate({"left": nowLeft}, 300);
//			$("#blk_index_main_focus .dot a").removeClass("curr").eq(index).addClass("curr");
//		}
//	});
//});
//need(["daoju.mall.lol.index", "util.jquery-min"], function (index, jQ) {
//	index.init();
//	});
//});
