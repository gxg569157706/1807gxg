require(["config"],function(){
	require(["header","footer","jquery","template","jquerycookie"],function(header,footer,$,template){
		 $("header").load("/html/component/header.html",function(){
		 	  header.nav();	 	
		 })
		
       var returns;   
       var str=location.search.slice(1);
       var arr= str.split("=");
       var obj={};
       obj[arr[0]] = arr[1];
        //  console.log(obj);
		  $.ajax({
		  	    method:"get",
		  	    data:obj,
			  	url:"http://localhost/second/gxg-server/cart.php",
			  	dataType:"json",
			  	success:function(res){
			  	// returns=res;
                  console.log(res);
			  var str = template("cart-template",{cart: res.cart});
			  	$(".ul-cart").html(str);
			  	},
			  	complete:function(){
			  		 $(".big-pic").mousemove(function(e){
    			   	var _left = e.pageX - $("#big-Img").offset().left - $("#fdj").width()/2;
				    var _top =  e.pageY - $("#big-Img").offset().top - $("#fdj").height()/2;		
                  
				//判断边界
				if(_left < 0) _left = 0;
				if(_top < 0) _top = 0;	 
		    	if(_left > $("#big-Img").width() - $("#fdj").width()){
		    			_left = $("#big-Img").width() - $("#fdj").width();
		    	}
			    if(_top > $("#big-Img").height() - $("#fdj").height()){
			    		_top = $("#big-Img").height() - $("#fdj").height();
			    }
			    	$("#fdj").css("display","block"); 
					$(".bigB").css("display","block"); 
						
				//放大镜的坐标
					$("#fdj").css({
						"left": _left,
						"top": _top
					});	
					
			     //放大的图片坐标
                  //判断鼠标使其不跑出图片框
					var zoomX = $("#bigImg").width() / $("#big-Img").width();
					//求图片比例
					var zoomY = $("#bigImg").height() / $("#big-Img").height();
					
					$("#bigImg").css({
					    left: -(_left * zoomX),
					    top: -(_top * zoomY)
					})
			      });
		       
			  	    $(".big-pic").mouseout(function(e){
			  	    	$("#fdj").css("display","none"); 
					    $(".bigB").css("display","none"); 
			  	    })
                  
                  //点击加入购物车
                  $("#add-c").click(function(e){
//                	alert("dd");
                 // 获取当前选购商品的信息
				var currentProduct = {
					id: $(".cart-id").text(),
					name: $(".cart-name").text(),
					img: $(".small-pic img").attr("src"),
					price: $("#price").text(),
//					size: $(".ul-size em").text(),
					amount:1
				};
		//		console.log(currentProduct);
				
				/* 判断是否已选购过当前商品 */
				// 从 cookie 中读取以有的购物车数据
				$.cookie.json = true; // 配置自动在JS值与JSON文本之间相互转换
				
				var products = $.cookie("cart") || [];
				// 判断是否已有选购
				var has = products.some(function(prod) {
					if (prod.id == currentProduct.id) { // 已有选购商品
						prod.amount++; // 数量自增
						return true;
					}
					return false;
				});
				if (!has) // 未选购
				products.push(currentProduct);
				// 保存购物车：存回cookie
				$.cookie("cart", products, {expires: 10, path:"/"});
				
				var cookie=$.cookie("cart");
				console.log(cookie);
			//	location.href = "http://localhost:8888/html/shop.html";
			    alert("成功加入购物车！");
              });
                
               //查看购物车
               $("#collect-c").click(function(){
               	 location.href = "http://localhost:8888/html/shop.html";
               })
               
               $(".ul-size").on("click",".ul-size li",function(e){
               	var src=e.target;
               	  $(src).css("background","#444");
               })
		     }
     		 
		 });
         
       
          
		 $("footer").load("/html/component/footer.html",function(){
		 	  footer.nav();
		 })
	})
})
