// 加载模块
$('.nav').load('./header.html');

$('.footer').load('./bottom.html');

// 实现方法放大镜的效果
// 实现两个蒙版的隐藏与消失


function move() {
    // var shopLeft = $('.shopDetail_l1');
    // var shopMask = $('.shopDetail_mask');
    // var shopLeftBox = $(".shopdetail_l1max");
    // var shopLeftImg = $('.shopdetail_l1max img');
    // 给未来的元素添加属性
    $('.shopDetail_left').on('mouseenter', '.shopDetail_l1', function () {
        $('.shopDetail_mask').css('display', 'block');
        $(".shopdetail_l1max").css('display', 'block');
    });

    $('.shopDetail_left').on('mouseleave', '.shopDetail_l1', function () {
        $('.shopDetail_mask').css('display', 'none');
        $(".shopdetail_l1max").css('display', 'none');
    });



    $('.shopDetail2').on('mousemove', '.shopDetail_l1', function (ev) {
        var e = ev || event;
        // 蒙板的定位值
        // console.log($(document).scrollTop());
        var maskX = e.clientX - $('.shopDetail_l1').offset().left - $('.shopDetail_mask').width() / 2;
        var maskY = e.clientY - $('.shopDetail_l1').offset().top - $('.shopDetail_mask').height() / 2 + $(document).scrollTop();
        
        if (maskX <= 0) {
            maskX = 0;
        }
        if (maskX >= ($('.shopDetail_l1').width() - $('.shopDetail_mask').width())) {
            maskX = $('.shopDetail_l1').width() - $('.shopDetail_mask').width();
        }
        if (maskY <= 0) {
            maskY = 0;
        }
        if (maskY >= ($('.shopDetail_l1').height() - $('.shopDetail_mask').height())) {
            maskY = $('.shopDetail_l1').height() - $('.shopDetail_mask').height();
        }
        //  console.log(maskY);
        $('.shopDetail_mask').css('left', maskX);
        $('.shopDetail_mask').css('top', maskY);



        // 移动比例
        var scaleX = maskX / ($('.shopDetail_l1').width() - $('.shopDetail_mask').width());
        var scaleY = maskY / ($('.shopDetail_l1').height() - $('.shopDetail_mask').height());
        //  console.log(scaleY);


        // 大图移动的坐标
        var maxImgX = scaleX * ($('.shopdetail_l1max img').width() - $(".shopdetail_l1max").width());
        var maxImgY = scaleY * ($('.shopdetail_l1max img').height() - $(".shopdetail_l1max").height());

        //  console.log(maxImgY);
        $('.shopdetail_l1max img').css('left', -maxImgX);
        $('.shopdetail_l1max img').css('top', -maxImgY);
    })

}
move();

function add() {
   
    $('.shopDetail2').on('mouseenter', '.shopDetail_l2 li', function () {
        var index = $(this).index();
        console.log(index);
        $('.shopDetail_l1 img').attr('src', '../image/shopdetail_'+(index+2) +'.jpg')
        $('.shopdetail_l1max img').attr('src', '../image/shopdetail_' +(index+2)+'s.jpg');
    })
}
add();
