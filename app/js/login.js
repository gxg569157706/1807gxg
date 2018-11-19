require(["config"],function(){
	require(["jquery","header","footer","jquerycookie"],function($,header,footer){
	
			$("footer").load("/html/component/footer.html", function(){
				footer.nav();
			  $("form").submit(function(e){
				//构造请求携带的参数
				var data={
					username:$("#username").val(),
					password:$("#password").val()
				};
				  $.ajax({
				  	method:"post",
				  	data:data,
				  	dataType:"json",
				  	url:"http://localhost/second/gxg-server/select.php",
				  	success:function(res){
				  		 console.log(res);
				  		 if(res.code===1){
				  		  console.log(data.username);
				  	 
				  		  alert("登录成功！");
				  		  $.cookie("user",data.username,{
				  		  	path:"/"
				  		  });
				  		 	location.href = "http://localhost:8888/index.html";
				      	  }else{
				      	  	//alert("账号或密码错误,请重新登录！");
				      	  	$(".alert").css("display","block");
				      	  }
				        }
				      });
		       e.preventDefault();
		  })
			 //  console.log("sdfsdf");
			})
	//	})
	})
})
