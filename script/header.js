// 导航的头部
// 我的淘宝
$('.nav1').mouseenter(function () {
    var index = $(this).index();
    $(this).find('.nav_list1').stop(true).slideDown(3);
    $('.nav1 .nav_list1').css('border', '1px solid #e5e5e5');
    $(this).find('.nav_list1').css('border-top', 'none');
    $(this).css('border', '1px solid #e5e5e5');
    $(this).css('border-bottom', 'none');


});
$('.nav1').mouseleave(function () {
    $(this).find('.nav_list1').stop(true).slideUp(3);
    $(this).css('border', 'none');
});

//  商家支持
$('.nav_sup').mouseenter(function () {
    var index = $(this).index();
    $(this).find('.nav_lists1').stop(true).slideDown(3);
    $(this).find('.nav_lists1').css('border', '1px solid #e5e5e5');
    $(this).find('.nav_lists1').css('border-top', 'none');
    $(this).css('border', '1px solid #e5e5e5');
    $(this).css('border-bottom', 'none');

});
$('.nav_sup').mouseleave(function () {
    $(this).find('.nav_lists1').stop(true).slideUp(3);
    $(this).css('border', 'none');
});

// 手机版
$('.nav2').mouseenter(function () {
    var index = $(this).index();
    $(this).find('.imgs').stop(true).slideDown(3);
    $(this).find('.imgs').css('border', '1px solid #e5e5e5');
    $(this).find('.imgs').css('border-top', 'none');
    $(this).css('border', '1px solid #e5e5e5');
    $(this).css('border-bottom', 'none');


});
$('.nav2').mouseleave(function () {
    $(this).find('.imgs').stop(true).slideUp(3);
    $(this).css('border', 'none');
});
// 网站导航
$('.nav3').mouseenter(function () {
    var index = $(this).index();
    $(this).find('.nav_list2').stop(true).slideDown(3);
    $(this).find('.nav_list2').css('border', '1px solid #e5e5e5');
    $(this).find('.nav_list2').css('border-top', 'none');
    $(this).css('border', '1px solid #e5e5e5');
    $(this).css('border-bottom', 'none');

});
$('.nav3').mouseleave(function () {
    $(this).find('.nav_list2').stop(true).slideUp(3);
    $(this).css('border', 'none');
});

// 顶部效果
var topSearch = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var flag = false;
        
        window.onscroll = function () {
            let h = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(h);

            if (h > 700) {
                flag = true;
            }
            if (h > 700 && h <= 1300) {
                $(".roller .daohang").css({
                    background: "#64c333"
                })
            } else {
                $(".roller .daohang").css({
                    background: "rgba(0,0,0,.6)"
                })
            }
            if (h > 1300 && h <= 1700) {
                $(".roller .chaoshi").css({
                    background: "red"
                })
            } else {
                $(".roller .chaoshi").css({
                    background: "rgba(0,0,0,.6)"
                })
            }
            if (h >1700 && h <=2200) {
                $(".roller .meili").css({
                    background: "yellow"
                })
            } else {
                $(".roller .meili").css({
                    background: "rgba(0,0,0,.6)"
                })
            }
            if (h < 700) {
                flag = false;
            }
            // console.log(flag)
            if (flag) {
                $(".search").stop(true).slideDown();
                $(".search").css({
                    display: 'block'
                })
                // $('.roller_Wrap').stop(true).slideDown();
                // $(".roller_Wrap").css({
                //     display: 'block',
                //     height:369
                   
                // })
                $('.roller_Wrap').stop(true).animate({
                    left:0,
                    bottom:0,
                    // height:369
                },10)
                $('.shopRoller_Wrap').stop(true).animate({
                    left:0,
                    bottom:0,
                    // height:369
                },100)
            }
            else {
                $(".search").stop(true).slideUp();
                $(".search").css({
                    display: 'none'
                })
                // $('.roller_Wrap').stop(true).slideUp();
                // $(".roller_Wrap").css({
                //     display: 'none',
                    
                // })
                $(".roller_Wrap").stop(true).animate({
                    left:-35,
                    bottom:-369
                },5)
                $(".shopRoller_Wrap").stop(true).animate({
                    left:-100,
                    bottom:-455
                },50)
            }
        }
    }
}
topSearch.init();
