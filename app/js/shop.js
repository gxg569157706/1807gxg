require(["config"],function(){
	require(["header","footer","jquery","template","jquerycookie"],function(header,footer,$,template){
		 $("header").load("/html/component/header.html",function(){
		 	 header.nav();
		 })
       
       
            //欢迎登录状态
   //  console.log("cookie");
       var $username = $.cookie("user");
        if($username){  //如果用户已经登录
            $(".user").html("["+$username+"]");
	      	$(".loginbar").css("display","none");
	      	$(".user").css("display","inline-block");
	      	$(".userOut").css("display","inline-block");
        }
        
        //退出登录
        $(".userOut").click(function(){
        	$.cookie("user","",{
        		expires:-1,
        		path:"/"
        	});
            $(".loginbar").css("display","inline-block");
	      	$(".user").css("display","none");
	      	$(".userOut").css("display","none");
        })

	   var str=location.search.slice(1);
       var arr= str.split("=");
       var obj={};
       obj[arr[0]] = arr[1];
//     console.log(obj);
		  
		        $.cookie.json=true;
		 // 读取cookie中保存的购物车
		        var products = this.products = $.cookie("cart") || [];
		// 渲染模板
				var data = {products: products}
				var html = template("shop-template", data);
				$(".ul-cal").html(html);
		    
		  // console.log(this.products);    
		//删除
			$(".cart-operation").on("click", ".cart-del",function(e){
				// 获取事件源元素(DOM元素)
				var src = e.target;
				// 获取事件源元素所在行(jQuery对象)
				var li = $(src).parents(".cart-list");
				// 获取商品 id
				var id = li.find(".cart-id").text();
				// 从数组中删除该 id 对应的商品对象
				products = products.filter(function(prod) {
					return !(prod.id == id);
					/*if (prod.id == id)
						return false;
					return true;*/
				});
				// 从 cookie 中保存的购物车结构中删除商品数据
				$.cookie("cart", products, {expires: 10, path: "/"});
				// 从 DOM 树中删除 DOM 行结构
				li.remove();
				 //调用合计函数
		          Cal();
		       //判断是否有购物车商品
		       if(products.length===0){
		       	$(".hidd").show();
		       }else{
		       	$(".hidd").hide();
		       }
			})
			
	    //加减
	    	$(".cart-num").on("click", ".jia,.jian",function(e){   
				// 获取事件源元素(DOM元素)
				var src = e.target;
				// 获取事件源元素所在行(jQuery对象)
				var li = $(src).parents(".cart-list");
				//console.log(li);
				// 获取商品 id
				var id = li.find(".cart-id").text();
				console.log(products);
				// 商品对象
			    var product = products.filter(function(prod) {
					return prod.id == id;
					
				})[0];
				console.log(product);
				// +/-数量
				if ($(src).is(".jian")) { // -
					if (product.amount <= 1)
						return;
					product.amount--;
				} else { // +
					product.amount++;
				}
				// 从 cookie 中保存的购物车结构中删除商品数据
				$.cookie("cart", products, {expires: 10, path: "/"});
			    // 页面渲染
				li.find("#cart-call").val(product.amount);
				li.find(".cart-count").text(product.amount*product.price);
//				console.log(product.price);
                //调用合计函数
		        Cal();
			})
	    	
		 //输入数量修改
		 
		 $(".cart-num").on("blur","#cart-call",function(e){
		 	//获取事件源元素
		 	var src = e.target;
		 	//通过事件源找到当前所在行
		 	var li = $(src).parents(".cart-list");
		 	//获取商品id
		 	var id = li.find(".cart-id").text();
		 	//找到商品对象
		 	var product = products.filter(function(prod){
		 		return id == prod.id;
		 	})[0];
		 	//修改数量
		 	var $amount = $(src).val();
		 	//正则校验
		 	product.amount=$amount;
		 	//保存回cookie中
		 	$.cookie("cart",products,{expires:10,path:"/"});
		 	// 显示小计
		 	li.find(".cart-count").text(product.amount*product.price);
		 	  //调用合计函数
		   		Cal();
		 })
		//全选
		  $(".checked-all").click(function(e){
		  	//获取全选复选框的选中状态
		  	var status = $(e.target).prop("checked");
//		  	console.log(status);
//		  	var status = $(e.target).attr("checked");
//		  	console.log(status);
            //将各商品当前行的状态设置为全选框状态
          $(".cart-select").prop("checked",status);
           //调用合计函数
		   Cal();
		  })
		//部分选中
	   $(".cart-list").on("click",".cart-select",function(e){
		  //获取所有行，复选框选中个数
		   var count=$(".cart-select:checked").length;
		   //设置全选复选框选中状态
		 //  var status = count === products.length;
		   $(".checked-all").prop("checked",count === products.length);
		 
		  //调用合计函数
		   Cal();
		});
		
		
		//封装计算合计金额
		function Cal(){
			var sum = 0;
			//找到选中行  中的复选框
			$(".cart-select:checked").each(function(i,item){
				sum += Number($(this).parents(".cart-list").find(".cart-count").text());
			})
			//显示
			$(".cart-sum").text(sum);
		}
		
		//购物车结算
		$(".cart-final").click(function(){
			
			alert("没钱,滚吧！");
			return false;
		})
		 $("footer").load("/html/component/footer.html",function(){
		 	  footer.nav();
		 })
	})
})
