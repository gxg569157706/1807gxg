require(["config"],function(){
	require(["header","footer","jquery","template"],function(header,footer,$,template){
		 $("header").load("/html/component/header.html",function(){
		 	 header.nav();
//		 	 console.log(a);
		 })
           $.ajax({
			  	method:"get",
			  	url:"http://localhost/second/gxg-server/newBrand.php",
			  	dataType:"json",
			  	success:function(res){
			  		console.log(res);
//			  	    console.log(res.newBrand[0].img);
			  		var html = template("newBrand-template",{newBrand:res.newBrand});
			  		$("#newBrands").html(html);
			  	}
			  });
		 $("footer").load("/html/component/footer.html",function(){
		 	  footer.nav();
		 })
	})
})
