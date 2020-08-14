
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




// part3
// swiper轮播

var mySwiper = new Swiper('.part3 .swiper-container', {
    autoplay: {
        delay: 2000,//1秒切换一次
        disableOnInteraction: false,
    },//可选选项，自动滑动
    pagination: {
        el: '.swiper-pagination',
        // bulletClass : 'my-bullet',
        clickable: true,
        type: 'bullets',
    },

})
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}



// 轮播数据栏
// $('.part3_list li').mouseenter(function () {
//     var index = $(this).index();
//     $(this).find('.part3_listwrap').stop(true).slideDown(3);


// });
// $('.part3_list li').mouseleave(function () {
//     $(this).find('.part3_listwrap').stop(true).slideUp(3);

// });
// 轮播数据ajax请求
$('.part3_list li').mouseenter(function () {
    var index = $(this).index();
    console.log(index);
    // $(this).find('.part3_listwrap').css('display', 'block');
    $(this).find('.part3_listwrap').stop(true).slideDown(3);
    $.ajax({
        url: "../data/index.json",
        data: 'get',
        dateType: 'json',
        success: function (json) {

            $('.part3_listwrap').html('');
            var newDiv = ` <div class="part3_liuxing">
                        <p>${json[index].tits1} &gt</p>
                        <ul>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                           
                        </ul>
                        <p>${json[index].tits1} &gt</p>
                        <ul>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                            <li>${json[index].tits2}</li>
                        </ul>
                    </div>

                    <div class="part3_imgs">
                    </div>`;

            $('.part3_listwrap').append(newDiv);
        }

    })
})
$('.part3_list li').mouseleave(function () {
    $(this).find('.part3_listwrap').stop(true).slideUp(3);
    // $(this).find('.part3_listwrap').css('display', 'none');
})



// tab切换

$('.part6_tab1 li').mouseenter(function () {
    var index = $(this).index();
    $(this).addClass('part6_active').siblings().removeClass(' part6_active');
    $('.part6_content .part6_tabs2').eq(index).addClass('part6_shows1').siblings().removeClass('part6_shows1');
})






// 顶部效果
var topSearch = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var flag = false;
        // var origin=false;
        window.onscroll = function () {
            var h = document.body.scrollTop || document.documentElement.scrollTop;
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
            console.log(flag)
            if (flag) {
                $(".search").slideDown();
                $(".search").css({
                    display: 'block'
                })
                $('.roller').stop(true).slideDown();
                $(".roller").css({
                    display: 'block',
                    height:'369px'
                })
            }
            else {
                $(".search").slideUp();
                $(".search").css({
                    display: 'none'
                })
                $('.roller').stop(true).slideUp();
                $(".roller").css({
                    display: 'none',
                    height:'369px'
                })
            }
        }
    }
}
topSearch.init();



 //导航缩略图（返回顶部等）
 var sNav={
    init:function(){
        this.getEle();
        this.bindEvent();
    },
    getEle:function(){
        this.chaoshi=$(".chaoshi");
        this.meili=$(".meili");
        this.xihuan=$(".xihuan");
        this.dingbu=$(".dingbu");
        this.docu=document.documentElement||document.body;
    },
    bindEvent:function(){
        
        var _this=this;
        //返回顶部
        this.dingbu.click(function(){
            $(_this.docu).stop(true).animate({scrollTop:"0px"},2000)
        });
        //天猫超市
        this.chaoshi.click(function(){
            $(_this.chaoshi).stop(true).animate({scrollTop:"1200px"},2000)
         
        })
        //天猫国际
        this.meili.click(function(){
           
           
        })
       
        this.xihuan.click(function(){
          
           
        })
    }
}
sNav.init();

