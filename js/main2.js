$(function(){
	$(".GNB_index").click(function(e){
		e.preventDefault();
		$(".GNB_index").addClass("active");
		$(".GNB_index2").addClass("active");
		$(".GNB_dim").stop().fadeIn(300);
	});
	$(".GNB_index2").click(function(e){
		e.preventDefault();
		$(".GNB_index").removeClass("active");
		$(".GNB_index2").removeClass("active");
		$(".GNB_dim").stop().fadeOut(300);
		$("#GNB ul ul").stop().fadeOut(300);
	});
	$("#GNB ul li").click(function(e){
		e.preventDefault();
		$("#GNB ul ul").stop().fadeOut(300);
		$(this).find("ul").stop().fadeToggle(300);
	});
	$(".GNB_dim").click(function(){
		$(".GNB_index").removeClass("active");
		$(".GNB_index2").removeClass("active");
		$(".GNB_dim").stop().fadeOut(300);
		$("#GNB ul ul").stop().fadeOut(300);
	});
});
