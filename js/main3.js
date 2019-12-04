$(function(){
	var n=0;
	var t=0;
	// 전체메뉴 고정: 윈도우 상단 좌표가 80px보다 커지면 .fixed_nav에 show 클래스 추가
	var pageTop=false;
	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800, function(){
			pageTop=true;
			$(window).trigger("scroll");
		});
	}, 10);
	$(window).scroll(function(){
		if(pageTop == false){
			return;
		}

		t=$(window).scrollTop();

		if(t < $("#section1").offset().top-100){
			n=0;
		}
		else if(t < $("#section2").offset().top-100){
			n=1;
		}
		else if(t < $("#section3").offset().top-100){
			n=2;
		}
		else if(t < $("#section4").offset().top-100){
			n=3;
		}
		else if(t < $("#about").offset().top-100){
			n=4;
		}
		else{
			n=5;
		} // n만 얻으면 패럴렉스 ui가 완성
		// css를 잡을 때, 처음부터 li로만 잡으면 a를 쓰거나 find("a")를 잡을 필요가 없어짐
	});
	// $(window).trigger("scroll"); // 강제로 최초 컨테이너 실행. 필수
	var targetY=0;
	$("#GNB > ul > li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		targetY=$(".wrapper > .ani").eq(n).offset().top-50;
		console.log(n)
		$("html").animate({"scrollTop" : targetY}, 800);
	});


});
