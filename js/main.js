$(function(){
	var w, h;
	var videow, vidoeh, edgew, edgeh;

	function videoResizing(){
		w=$(window).width();
		h=$(window).height();

		$("#keyvideo").css({height:h});
		videow=$("#keyvideo").width();
		// console.log("videoh : "+videoh);
		edgew=(w-videow)/2;
		// console.log("edgew : "+edgew);
		$("#keyvideo").css({marginLeft:edgew});
	}

	var video=document.getElementById("keyvideo");

	video.onloadeddata=videoResizing;

	$(window).resize(function(){
		videoResizing();
	});
});