require(["config"],function(){require(["header","footer","jquery","template"],function(t,e,o,a){o("header").load("/html/component/header.html",function(){t.nav()});var l=location.search.slice(1).split("="),n={};n[l[0]]=l[1],o.ajax({method:"get",data:n,url:"http://localhost/second/gxg-server/detailList.php",dataType:"json",success:function(t){console.log(t);var e=a("detail-template",{detailList:t.detailList});o(".detailImg").html(e)}}),o("footer").load("/html/component/footer.html",function(){e.nav()})})});