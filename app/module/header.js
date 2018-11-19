define(["tools","jquery","jquerycookie"],function(tools,$){
	function Header(){}
	//实现下拉菜单
	Header.prototype.nav = function(){
//		var subMenu = tools.$(".subMenu");
//		for (var i = 0; i < subMenu.length; i++) {
//			subMenu[i].onclick = function(){
//				tools.$("ul",this)[0].style.display = "block";
//				console.log(this);
//			}
//		}
      $(".ul").mouseover(function(e){
      	    $(this).find(".panel").toggle();
//         console.log("enter");
      })
       $(".ul").mouseout(function(e){
      	    $(this).find(".panel").toggle();
//         console.log("leave");
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
      
	}

	return new Header();
})