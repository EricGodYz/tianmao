
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
    autoplay: true,//可选选项，自动滑动
    pagination: {
        el: '.swiper-pagination',
        // bulletClass : 'my-bullet',
        clickable: true,
        type : 'bullets',
    },

})
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}



// 轮播数据栏
$('.part3_list li').mouseenter(function () {
    var index = $(this).index();
    $(this).find('.part3_listwrap').stop(true).slideDown(3);


});
$('.part3_list li').mouseleave(function () {
    $(this).find('.part3_listwrap').stop(true).slideUp(3);

});