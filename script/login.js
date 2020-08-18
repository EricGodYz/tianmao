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



$('.name').click(function(){
    $('.name').val('');

})
// $('.name').blur(function(){
//     $('.name').val('用户名/邮箱/手机号');

// })
$('.pass').focus(function(){
    $('.pass').val('');

})
// $('.pass').blur(function(){
//     $('.pass').val('请输入密码');

// })




// 登录验证
$('.btn').click(function(){
    // 密码的验证
    var passValue = $('.pass').val();
    if(passValue.length < 6 || passValue > 18){
        alert('密码长度必须在6-20个字符');
    }
    var flag1 = 0 ,flag2 = 0, flag3 = 0;
    var reg1 = /\d/, reg2 = /[a-zA-Z]/,reg3 = /[^\da-zA-Z]/;
    if(reg1.test(passValue) === true){
        flag1 = 1;
    }
    if(reg2.test(passValue) === true){
        flag2 = 1;
    }
    if(reg3.test(passValue) === true){
        flag3 = 1;
    }
    var result = flag1 + flag2 + flag3;
    if(result < 2){
        alert('密码必须包含数字,字母或字符中的两种以上');
    }

    // 账号的验证
    var useValue = $('.name').val();
    var reg4 = /\W/;
    if(useValue.length < 8 || useValue.length > 20){
        alert('账户的长度必须在8-20个字符');
    }
    if(reg4.test(useValue)){
        alert('账户只能包含数字、字母、下划线');
    }

    $.ajax({
        url:'../data/login.json',
        data:'get',
        dataType:'json',
        success:function(json){
            $.each(json,function(index,item){
                // console.log(useValue);
                // console.log(passValue);
                if(json[index].name === useValue && json[index].pass === passValue){
                    alert('登录成功');
                    window.location.href = '../pages/index.html';
                }
            })
            // $.each(json,function(index,item){
            //     console.log(useValue);
            //     console.log(passValue);
            //     if(json[index].name !== useValue && json[index].pass !== passValue){
            //         alert('登录失败');
            //         $('.name').val('');
            //         $('.pass').val('');
            //         return;
                    
            //     }
            // })
            
        }

    })
})













// 进行本地化存储

$('.loginright').on('click','.btn',function(){
    var loginText = [];
    var userName = $('.name').val();
    loginText.push(userName);
    console.log(loginText);
    localStorage.setItem('user',JSON.stringify(loginText));
});