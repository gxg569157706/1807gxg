require(["config"], function(){
	require(["jquery", "tools", "header", "footer","template","lunbo"], function($,tools,header,footer,template){

		//异步加载header.html
		/*tools.ajax("GET", "/html/component/header.html",null, function(data){
			document.getElementsByTagName("header")[0].innerHTML = data;
			header.nav();
		},false);*/
     new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
	    }).then(function(){
			  $(".slide-container").load("/html/component/lunbo.html",function(){
				  	$(".slide-wrap").lunbo({
					goPrev:"goPrev",
					goNext: "goNext"
			      })
				  	header.nav();
			  });
			  $.ajax({
			  	method:"get",
			  	url:"http://localhost/second/gxg-server/mainList.php",
			  	dataType:"json",
			  	success:function(res){
			  		console.log(res);
			  	    //console.log(res.mainList[0].img);
			  		var str = template("main-template",{mainList: res.mainList});
			  		$(".list").html(str);
			  	}
			  });
			}).then(function(){
				$("footer").load("/html/component/footer.html", function(){
				   footer.nav();
			});
			})
	   })
	})
