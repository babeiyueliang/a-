;(function (win,doc){
	function changeSize(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*50+'px';
	}
	changeSize();
	win.addEventListener('resize',changeSize,false);
})(window,document);




var ul=document.querySelector('.xx');

ul.addEventListener('touchstart',function(ev){
	var oldX=ev.targetTouches[0].pageX-ul.offsetLeft;
	function fnMove(ev){
		var x=ev.targetTouches[0].pageX-oldX;
		if(x>=0){
			ul.style.left=0;
		}else if(x<document.body.clientWidth-1700){
			x=(document.body.clientWidth-1700)+'px';
		}else{
			ul.style.left=x+'px';
		}
	}
	document.addEventListener('touchmove',fnMove,false);
	document.addEventListener('touchend',function (){
		document.removeEventListener('touchmove',fnMove,false);
	},false);
},false);
$(function(){



	var iNow=0;
	$('.xx li').click(function (){
		//console.log('this:'+this);
		$('.xx li').removeClass('on');
		$(this).addClass('on');
		iNow=$(this).index();

		$('.div .div1').removeClass('show');
		//console.log($(this).index());
		$('.div .div1').eq(iNow).addClass('show');
	});
});
	

new Swiper('.swiper-container',{
	loop:true, 							//无限循环/无缝滚动
	pagination:'.swiper-pagination',	//生成小圆点
	paginationClickable:true,			//小圆点可点击
	autoplay:2000, 						//自动播放
});