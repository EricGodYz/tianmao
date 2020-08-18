// 
$('.nav').load('./header.html');
// $('.search').load('./header.html');
// $('.part1').load('./header.html');
$('.footer').load('./bottom.html');



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


// 轮播数据ajax请求
$('.part3_list li').mouseenter(function () {
    var index = $(this).index();
    console.log(index);
    // $(this).find('.part3_listwrap').css('display', 'block');
    $(this).css({
        background:"#fff",
        
    });
    $(this).find('.aa').css('color','#2925E3')
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
                        <img src="${json[index].imgurl}" alt="">
                    </div>`;

            $('.part3_listwrap').append(newDiv);
        }

    })
})
$('.part3_list li').mouseleave(function () {
    $(this).css({
        background:"rgba(3,3,3,.1)"
       
    });
    $(this).find('.aa').css('color','#fff');
    $(this).find('.part3_listwrap').stop(true).slideUp(3);

    // $(this).find('.part3_listwrap').css('display', 'none');
})



// tab切换

$('.part6_tab1 li').mouseenter(function () {
    var index = $(this).index();
    $(this).addClass('part6_active').siblings().removeClass(' part6_active');
    $('.part6_content .part6_tabs2').eq(index).addClass('part6_shows1').siblings().removeClass('part6_shows1');
})


 //导航缩略图（返回顶部等）
 var sNav={
    init:function(){
        this.getEle();
        this.bindEvent();
    },
    getEle:function(){
        this.daohang = $('.daohang');
        this.chaoshi=$(".chaoshi");
        this.guoji = $('.guoji');
        this.meili=$(".meili");
        this.chaodian= $('.chaodian');
        this.jujia = $('.jujia');
        this.aichao = $('.aichao');
        this.huwai = $('.huwai');
        this.xihuan=$(".xihuan");
        this.dingbu=$(".dingbu");
        this.docu=document.documentElement||document.body;
    },
    bindEvent:function(){
        var _this=this;
        //返回顶部
        this.dingbu.click(function(){
            $(_this.docu).stop(true).animate({
                "scrollTop":0
            },300)
        });
        //天猫超市
        this.chaoshi.click(function(){
            $(_this.docu).stop(true).animate({
                "scrollTop":1200
            });
         
        })
        // 天猫国际
        this.guoji.click(function(){
            $(_this.docu).stop(true).animate({
                "scrollTop":1200
            });
        })
        //美丽人生
        this.meili.click(function(){   
            $(_this.docu).stop(true).animate({scrollTop:1900},2000);
        })
        // 潮流酷玩
        this.chaodian.click(function(){   
            $(_this.docu).stop(true).animate({scrollTop:1900},2000);
        })
        // 居家生活
        this.jujia.click(function(){   
            $(_this.docu).stop(true).animate({scrollTop:1900},2000);
        })
        // 打造爱巢
        this.aichao.click(function(){   
            $(_this.docu).stop(true).animate({scrollTop:1900},2000);
        })
        // 户外出行
        this.huwai.click(function(){   
            $(_this.docu).stop(true).animate({scrollTop:1900},2000);
        })
        // 猜你喜欢
        this.xihuan.click(function(){
            
            $(_this.docu).stop(true).animate({scrollTop:2200},2000)
        })
    }
}
sNav.init();



