$(function(){
	var amount=0; // 공이 움직이는 위치 변수입니다.
	var xDown; // 시작 위치의 x 좌표 변수입니다.
	var yDown; // 시작 위치의 y 좌표 변수입니다.
	var direction=""; // 배너의 드래그 방향 변수입니다.(left, right, up, down)
	var moving=false; // 움직이고 있는 상황을 점검하는 변수입니다.

	$(".section2_key").on("touchstart", function(e){
		var evt=e.originalEvent;
		xDown=evt.touches[0].clientX;
		yDown=evt.touches[0].clientY;
		// console.log(xDown+" : "+yDown);
	});
	$(".section2_key").on("touchmove", function(e){ // 터지해야 할 요소를 감싼 컨테이너
		var evt=e.originalEvent;

		if(moving) return false;

		direction=swipeAPI(evt, xDown, yDown); // 이벤트 객체, touchstart x 좌표, touchstart y 좌표
		var x=$(".swipe").css("left");
		if(direction == "right"){
			moving=true;
			amount+=320;
			if (x == "0px") {
				if(direction == "right"){
					amount=-640;
				}
			}
		}
		else if(direction == "left"){
			moving=true;
			amount-=320;
			if (x == "-640px") {
				if(direction == "left"){
					amount=0;
				}
			}
		}
		else if(direction == "top"){
			console.log("no");
		}
		$(".swipe").css({left:amount});
	});
	$(".swipe").on("transitionend", function(){ // 터치해야 할 요소
		moving=false;
	});

	// evt : touchstart, touchend 이벤트 객체입니다.
	// xd : touchstart, x 좌표입니다.
	// yd : touchstart, y 좌표입니다.
	function swipeAPI(evt, xd, yd){
		var moveDirection="";
		var xUp=evt.touches[0].clientX;
		var yUp=evt.touches[0].clientY;
		var xDiff=xd-xUp;
		var yDiff=yd-yUp;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			if(xDiff > 0){
				moveDirection="left";
			}
			else{
				moveDirection="right";
			}
		}
		else{
			if(yDiff > 0){
				moveDirection="up"
			}
			else{
				moveDirection="down";
			}
		}
		return moveDirection;
	}
});
