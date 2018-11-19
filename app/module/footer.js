define(["tools","jquery"],function(tools,$){
	function Footer(){}
	//实现下拉菜单
	Footer.prototype.nav = function(){

//    $(".panel-nav").mouseenter(function(){
//    	$(".panel").slideDown();
//    })
//    $(".panel").mouseleave(function(){
//    	$(".panel").slideUp();
//    })
     $("#A").hover(function(){
  		$(".download-app-box").show();
     },function(){
     	$(".download-app-box").hide();
     });
      
    $(window).scroll(function(){
		 //创建一个变量存储当前窗口下移的高度
		var scroTop = $(window).scrollTop();
		//判断当前窗口滚动高度
		//如果大于100，则显示顶部元素，否则隐藏顶部元素
		if(scroTop>100){
			$("#A,#AA").fadeIn(500);
		}else{
			$("#A,#AA").fadeOut(500);
		}
	});
		    	
	//为返回顶部元素添加点击事件
	$('.return-top').click(function(){
		//将当前窗口的内容区滚动高度改为0，即顶部
		$("html,body").animate({scrollTop:0},"slow");
	})
      
   }
	return new Footer();
})