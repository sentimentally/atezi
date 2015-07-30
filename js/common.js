$(function(){
	var bodyWidth = $(window).width();
	$("body").width(bodyWidth);
	var bodyHeight = $(window).height();
	if (bodyHeight <= 479) { bodyHeight = 479;};
	$("body").height(bodyHeight);
});
function gotonext(prourls,nexturls){
	// 监听手指落下时状态
	var startX,startY,endX,endY,bodyHeight = $(window).height();
	document.addEventListener('touchstart',function (ev) {
		startY = ev.touches[0].pageY;
		startX = ev.touches[0].pageX;
	}, false);
	// 离开时状态
	document.addEventListener('touchend',function (ev) {
		endY = ev.changedTouches[0].pageY;
		endX = ev.changedTouches[0].pageX;
		if (endY - startY > 0.3*bodyHeight && Math.abs(endX - startX) < 50 ) {
			// 上一页
			if(prourls != '') location.href = prourls;
		}
		if (startY - endY > 0.3*bodyHeight && Math.abs(endX - startX) < 50 ) {
			// 下一页
			if(nexturls != '') location.href = nexturls;
		};
		startX = startY = endX = endY = bodyHeight = null;
	}, false);
}