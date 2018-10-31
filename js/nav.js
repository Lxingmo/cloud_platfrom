//鼠标移入动画
$(".nav_text").mouseenter(function(){
	$(this).children(".nav_text2_1").slideDown(200);
})
$(".nav_text").mouseleave(function(){
	$(this).children(".nav_text2_1").slideUp(200);
})

var body_width=$(window).width();
//logo图片切换
if(body_width<1280){
			$("#index_img").attr("src","img/nav/logo1.png");
		}
		if(body_width>1280){
			$("#index_img").attr("src","img/nav/logo.png");
		}
$(window).resize(function() {
	    var body_width=$(window).width();
		if(body_width<1280){
			$("#index_img").attr("src","img/nav/logo1.png");
		}
		if(body_width>1280){
			$("#index_img").attr("src","img/nav/logo.png");
		}  
	});

//下拉菜单切换
if(body_width<769){
		$(".menu").on("click", function(e){
		if($(".menu2").is(":hidden")){
	    	$(".menu2").slideDown();
	    	$("body").css("cursor","pointer");
	    }else{
	    	$(".menu2").slideUp();
	    }
	 
	    $("body").one("click", function(){
	        $(".menu2").slideUp();
	        $("body").css("cursor","auto");
	    });
	 
	    e.stopPropagation();
	});
}else if(body_width>769){
	$(".menu").on("click", function(e){
		if($(".menu2").is(":hidden")){
	    	$(".menu2").slideDown();
	    }else{
	    	$(".menu2").slideUp();
	    }
	 
	    $("body").one("click", function(){
	        $(".menu2").slideUp();
	    });
	 
	    e.stopPropagation();
	});
}