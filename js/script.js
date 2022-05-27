//서브메뉴슬라이드
$(function(){
	$(".nav1").mouseenter(function(){
		$(".sub_inner1").stop().slideDown();
	});
	$(".nav1").mouseleave(function(){
		$(".sub_inner1").stop().slideUp(150);
	});
	
});

$(function(){
	$(".nav2").mouseenter(function(){
		$(".sub_inner2").stop().slideDown();
	});
	$(".nav2").mouseleave(function(){
		$(".sub_inner2").stop().slideUp(150);
	});
	
});

$(function(){
	$(".nav3").mouseenter(function(){
		$(".sub_inner3").stop().slideDown();
	});
	$(".nav3").mouseleave(function(){
		$(".sub_inner3").stop().slideUp(150);
	});
	
});

$(function(){
	$(".nav4").mouseenter(function(){
		$(".sub_inner4").stop().slideDown();
	});
	$(".nav4").mouseleave(function(){
		$(".sub_inner4").stop().slideUp(150);
	});
	
});


// 상단 메뉴 고정하기
$(function() {

	$(document).ready(function() {
  
	  var scrollOffset = $('.scroll-menu').offset();
  
	  $(window).scroll(function() {
		if ($(document).scrollTop() > scrollOffset.top) {
		  $('.scroll-menu').addClass('scroll-fixed');
		}
		else {
		  $('.scroll-menu').removeClass('scroll-fixed');
		}
	  });
	});
  });


// 폼태그 date 오늘 날짜 자동 설정
window.onload = function() {
	today = new Date();
	console.log("today.toISOString() >>>" + today.toISOString());
	today = today.toISOString().slice(0, 10);


	console.log("today >>>> " + today);
	bir = document.getElementById("date_today");
	bir.value = today;
}


// 탭메뉴
$(function(){
    $(".inform>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
});

//아코디언
$(function(){
	$(".board li").click(function(){
		$(this).children("div").slideToggle();
	});
});