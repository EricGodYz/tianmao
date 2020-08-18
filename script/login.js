// 加载模块
$('.nav').load('./header.html');

$('.footer').load('./bottom.html');




// tab切换1

$('.loginright_con1 li').click(function(){
    var index = $(this).index();
    $(this).addClass('loginshow').siblings().removeClass("loginshow");
    $('.loginright .loginright_con2').eq(index).addClass('login_active').siblings().removeClass('login_active');
})



// tab切换2

$('.loginright_icon li').click(function(){
    var index = $(this).index();
    console.log(index);
    // $(this).addClass('iconshow').siblings().removeClass('iconshow');
    $(this).removeClass('iconshow');
    $(this).siblings().addClass('iconshow');
    $('.loginright .loginright1').eq(index).addClass('loginright1active').siblings().removeClass('loginright1active');
    
})

// 登录验证问题
