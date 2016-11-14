/**
 * Created by dyj on 2016/10/24.
 */
$(function () {
    $.scrollUp({
        scrollImg: true
    });
    nav();
    Display_area();
    banner();
    xixin();
    lianxi();
});

function xixin() {
    $('.nextul').mouseover(function () {
        $('.nextul_aft').css('left','0%')
    })
    $('.nextul').mouseout(function () {
        $('.nextul_aft').css('left','100%')
    })

    $('.nextul1').mouseover(function () {
        $('.nextul_aft1').css('left','0%')
    })
    $('.nextul1').mouseout(function () {
        $('.nextul_aft1').css('left','-100%')
    })

    $('.nextul2').mouseover(function () {
        $('.nextul_aft2').css('left','0%')
    })
    $('.nextul2').mouseout(function () {
        $('.nextul_aft2').css('left','100%')
    })

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

var Time0;
var c = 1;
function banner() {
    var x = 1;
    $main_banner_div0 = $('.main_banner_img1');
    Time0 = setInterval(function () {
        $main_banner_div0.css('transform','scale('+x+')');
        x += +0.001;
    },60);

    setTimeout(function () {
        clearTimeout(Time0);
        $main_banner_div0.animate({opacity:'0'},1200)
        setTimeout(function () {
            if (c == 2){
                $('.main_banner_img1')[0].src = 'image/food0.jpg'
            }
            if (c == 1){
                $('.main_banner_img1')[0].src = 'image/jzb.jpg'
            }
        },1100)
        $main_banner_div0.animate({opacity:'1'},1200)
        setTimeout(function () {
            banner()
            if(c == 1){
                c = 2;
            }else{
                c = 1
            }

        },1000)
    },5000)
}
function lianxi (){
    $(".phone")[0].onclick = function(){
    $("html,body").animate({ scrollTop: $('.foot')[0].offsetTop}, 500);
    }
}
function Display_area() {
    $h10 = $('.main_banner_h10');
    $h1_img = $('.main_banner_img1');
    $PHILOSOPHY = $('.PHILOSOPHY');
    $jsg = $('.jsg')
    $gzc_tex = $('.gzc_tex')
    $spnjs0 = $('#spnjs0');
    $spnjs1 = $('#spnjs1');
    $spnjs2 = $('#spnjs2');
    $h1_img.animate({opacity:'1'},3000)
    setTimeout(function () {
        $h10.animate({opacity:'1'},3000)
    },1000)
    setInterval(function () {
        if ($(document).scrollTop() == 360 || $(document).scrollTop() > 360){
            $PHILOSOPHY.css('opacity','1')
        }

        if ($(document).scrollTop() == 820 || $(document).scrollTop() > 820){
            $spnjs0.css('opacity','1')
        }

        if ($(document).scrollTop() == 1260 || $(document).scrollTop() > 1260){
            $spnjs1.css('opacity','1')
        }

        if ($(document).scrollTop() == 1713 || $(document).scrollTop() > 1713){
            $spnjs2.css('opacity','1')
        }

        if ($(document).scrollTop() == 2170 || $(document).scrollTop() > 2170){
            $gzc_tex.css('opacity','1')
        }

        if($(document).scrollTop() == 3290 || $(document).scrollTop() > 3290){
            $jsg.css('opacity','1')
        }
    },1)
}
function tan(ta) {
    if (ta.id == 'na6'){
        $("html,body").animate({ scrollTop: 0}, 500);
    }

    if (ta.id == 'na1'){
        $("html,body").animate({ scrollTop: 600}, 500);
    }

    if (ta.id == 'na2'){
        $("html,body").animate({ scrollTop: 1100}, 500);
    }

    if (ta.id == 'na3'){
        $("html,body").animate({ scrollTop: 2400}, 500);
    }

    if (ta.id == 'na4'){
        $("html,body").animate({ scrollTop: 3700}, 500);
    }

    if (ta.id == 'na5'){
        $("html,body").animate({ scrollTop: 4275}, 500);
    }
}
