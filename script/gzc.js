
$(function () {
    var i;
 jianru();
 lianxi();
 nav();
 for (i=0;i<$('.texiao2').length;i++) {
      $('.texiao2')[i].onclick = function(){
        var bimg = $("#big_img");
        // var gao = this.parentElement.offsetTop-window.scrollY;
        // var zuo = this.parentElement.offsetLeft;
        // bimg.css('top',gao);
        // bimg.css('left',zuo);
        bimg.animate({ 
            opacity:'1',
        }, "slow");
        // bimg.animate({width: '46%'}, "slow");
        // bimg.animate({height: '60%'}, "slow");
        bimg.css('display','block');
        bimg[0].innerHTML="<img class=\'datu\'><img class=\'close\' src=\'../image/closew.png\'>";
        $(".datu")[0].src=this.parentElement.childNodes[0].src;
        $(".close")[0].onmouseover = function () {
            this.src = "../image/closex.png";
        }
        $(".close")[0].onmouseout = function () {
            this.src = "../image/closew.png";
        }
        $(".close")[0].onclick = function () {
             bimg.animate({ 
            opacity:'0',
            }, "slow",function(){
                bimg.css('display','none');
            });
        }
      }
 }

});
    
jianru = function () {
        var box = $(".scrollbox");
         var wScrollY = window.scrollY; // 当前滚动条位置    
    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）    
    var bScrollH = document.body.scrollHeight; // 滚动条总高度     
    for (var i = 0; i <box.length; i++) {
         if (wScrollY + wInnerH >= box[i].offsetTop) {
         box[i].style. opacity = '1';
        }
    } 
}
gotop = function () {
	 $("html,body").animate({ scrollTop: 0}, 500);
}
function lianxi (){
    $(".phone")[0].onclick = function(){
    $("html,body").animate({ scrollTop: $('.foot')[0].offsetTop}, 500);
    }
}
function nav() {
    $span = $('.sapm_m');
    $span0 = $('.span');
    $nav = $('.nav');
    $isClick = false;

    $span.click(function () {
        if ($isClick){
            $span0.removeClass('open');
            $nav.css('left','-341px');
            $isClick = false;
            return;
        }
        $span0.addClass('open');
        $nav.animate({left: '0px'}, 200);
        $isClick = true;
    })
}
function godown (){
    $("html,body").animate({ scrollTop: $('.foot')[0].offsetTop}, 500);
}
function next(html){
    location.href=html;
}