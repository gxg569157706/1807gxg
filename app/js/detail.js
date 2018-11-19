require(["config"],function(){
	require(["header","footer","jquery","template"],function(header,footer,$,template){
		 $("header").load("/html/component/header.html",function(){
		 	 header.nav();
		 })
         
         var str=location.search.slice(1);
         var arr= str.split("=");
         var obj={};
         obj[arr[0]] = arr[1];
  
		  $.ajax({
		  	    method:"get",
		  	    data:obj,
			  	url:"http://localhost/second/gxg-server/detailList.php",
			  	dataType:"json",
			  	success:function(res){
			  		console.log(res);
			  	   // console.log(res.detailList);
			  		var str = template("detail-template",{detailList: res.detailList});
			  		$(".detailImg").html(str);
			  	}
		  });
		 $("footer").load("/html/component/footer.html",function(){
		 	  footer.nav();
		 })
	})
})
