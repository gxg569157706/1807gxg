require(["config"],function(){
	require(["jquery","header","footer"],function($,header,footer){
//		new Promise(function(resolve,reject){
//			$("#simple-header").load("/html/component/register.html", function(){
//			  resolve();
//			})
	//	}).then(function(){
			$("footer").load("/html/component/footer.html", function(){
				 footer.nav();
				//console.log($("#username"));
				$("#username").blur(function(){
					var value1 = $(this).val();
					var reg = /^[0-9 | a-z | A-Z]{6,}$/;
					if(reg.test(value1)){
						$(".text2").css("display","block");
						$(".text1").css("display","none");
					}else{
						$(".text1").css("display","block");
						$(".text2").css("display","none");
					}
				})
				$("#password").blur(function(){
					var value1 = $(this).val();
					var reg = /^[0-9 | a-z | A-Z]{6,}$/;
					if(reg.test(value1)){
						$(".text4").css("display","block");
						$(".text3").css("display","none");
					}else{
						$(".text3").css("display","block");
						$(".text4").css("display","none");
					return false;
					}
				})
	
			  $("form").submit(function(e){
			  	if($("input").val()==""){
			  		alert("用户名或密码不能为空 !");
			  		return false;
			  	}
			    //构造请求携带的参数
			    var data={
			    	username:$("#username").val(),
			    	password:$("#password").val()
			    };
			      $.ajax({
			      	method:"post",
			      	data:data,
			      	dataType:"json",
			      	url:"http://localhost/second/gxg-server/insert.php",
			      	success:function(res){
			      		 console.log(res);
			      		 if(res.code===1){
			      		 	alert("注册成功！请登录 ！");
			      		 	location.href = "http://localhost:8888/html/component/login.html";
			      		 }
			        }
			      });
			       e.preventDefault();
			  })
//			})
		})
	})
})
