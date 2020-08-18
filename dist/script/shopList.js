
// 加载模块
$('.nav').load('./header.html');

$('.footer').load('./bottom.html');



// shoplist1轮播图
var mySwiper = new Swiper('.shoplist1_Wrap .swiper-container', {
    autoplay: {
        delay: 1000,//1秒切换一次
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
})

// 商品列表2的ajax的请求
$.ajax({
    url: "../data/shopList.json",
    data: 'get',
    dateType: 'json',
    success: function (json) {

        // $('.shoplist2_Wrap').html('');
        $.each(json, function (index, item) {
            var newLi = `<a href="./shopDetail.html"><li class="shoplist2_con1" code="${json[index].code}">
                        <img class="shoplist2_conimg"  src="${json[index].imgurl}" alt="">
                        <div class="shoplist2_box1">
                            <p>${json[index].p}</p>
                            <div class="shoplist2_box2">
                                <img src="../image/shoplist2_6.jpg" alt="">
                                <div class="shoplist2_box3">
                                <span>${json[index].price}</span>
                                <i>${json[index].kuang}</i>
                                </div>

                            </div>
                            <div class="shoplist2_box4">
                                <span>立即购买</span>
                                <em class=""></em>
                            </div>
                        </div>
                     </li></a>`;
            $('.shoplist2 .shoplist2_imgs').append(newLi);

        })


    }

})


// 商品列表3的ajax的请求
$.ajax({
    url: "../data/shopList3.json",
    data: 'get',
    dateType: 'json',
    success: function (json) {

        // $('.shoplist2_Wrap').html('');
        $.each(json, function (index, item) {
            var newLi = `<li class="shoplist2_con1">
                        <img class="shoplist2_conimg"  src="${json[index].imgurl}" alt="">
                        <div class="shoplist2_box1">
                            <p>${json[index].p}</p>
                            <div class="shoplist2_box2">
                                <img src="../image/shoplist2_6.jpg" alt="">
                                <div class="shoplist2_box3">
                                <span>${json[index].price}</span>
                                <i>${json[index].kuang}</i>
                                </div>

                            </div>
                            <div class="shoplist2_box4">
                                <span>立即购买</span>
                                <em class=""></em>
                            </div>
                        </div>
                     </li>`;
            $('.shoplist3 .shoplist2_imgs').append(newLi);

        })


    }

})


// 数据存储
$('.shoplist2').on('click','.shoplist2_con1',function(){
    var goodsAttr = [];
    var num = $(this).attr('code');
    console.log(num);
    goodsAttr.push({"code":num});
    // console.log(goodsAttr);
    localStorage.setItem('shoplist2_con1',JSON.stringify(goodsAttr));
})


var toshop = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var flag = false;
        window.onscroll = function () {
            var h = document.body.scrollTop || document.documentElement.scrollTop;
            console.log(h);
            if (h > 700) {
                flag = true;
            }
            if (h > 500 && h <= 1300) {
                $(".shopRoller .shopdapai").css({
                    background: "#333"
                })
            } else {
                $(".shopRoller .shopdapai").css({
                    background: " #8035fb"
                })
            }
            if (h > 1300 && h <= 1700) {
                $(".shopRoller  .shopjinkou").css({
                    background: "#333"
                })
            } else {
                $(".shopRoller  .shopjinkou").css({
                    background: " #8035fb"
                })
            }
            if (h > 1700 && h <= 2200) {
                $(".shopRoller  .shopbaiyuan").css({
                    background: "#333"
                })
            } else {
                $(".shopRoller  .shopbaiyuan").css({
                    background: " #8035fb"
                })
            }
            if (h < 700) {
                flag = false;
            }
            // console.log(flag)
            if (flag) {
                $('.shopRoller_Wrap').stop(true).animate({
                    left: 0,
                    bottom: 0,

                }, 100)
            }
            else {
                $(".shopRoller_Wrap").stop(true).animate({
                    left: -100,
                    bottom: -455
                }, 50)
            }
        }
    }
}
toshop.init();



//导航缩略图（返回顶部等）
var sNav = {
    init: function () {
        this.getEle();
        this.bindEvent();
    },
    getEle: function () {
        this.shopdapai = $('.shopdapai');
        this.shopguoji = $(".shopguoji");
        this.shopjinkou = $('.shopjinkou');
        this.shopbaiyuan = $(".shopbaiyuan");
        this.shopquanqiu = $('.shopquanqiu');
        this.shopzhenxuan = $('.shopzhenxuan');

        this.docu = document.documentElement || document.body;
    },
    bindEvent: function () {
        var _this = this;
        //返回顶部
        this.shopzhenxuan.click(function () {
            $(_this.docu).stop(true).animate({
                "scrollTop": 0
            }, 300)
        });
        //大牌精选
        this.shopdapai.click(function () {
            $(_this.docu).stop(true).animate({
                "scrollTop": 500
            });

        })
        // 国际大牌
        this.shopguoji.click(function () {
            $(_this.docu).stop(true).animate({
                "scrollTop": 500
            });
        })
        //进口原装
        this.shopjinkou.click(function () {
            $(_this.docu).stop(true).animate({ scrollTop: 1300 }, 1000);
        })
        // 百元好货
        this.shopbaiyuan.click(function () {
            $(_this.docu).stop(true).animate({ scrollTop: 1300 }, 1000);
        })
        // 全球鲜果
        this.shopquanqiu.click(function () {
            $(_this.docu).stop(true).animate({ scrollTop: 1300 }, 1000);
        })

    }
}
sNav.init();




//
// function toShop() {
//     var flag1 = false;
//     window.onscroll = function () {
//         let h = document.body.scrollTop || document.documentElement.scrollTop;
//         console.log(h);
//         if (h > 700) {
//             flag1 = true;
//         }
//         if (h > 500 && h <= 1300) {
//             $(".shopdapai").css({
//                 background: "#333"
//             })
//         } else {
//             $(".shopdapai").css({
//                 background: " #8035fb"
//             })
//         }
//         if (h > 1300 && h <= 1700) {
//             $(".shopjinkou").css({
//                 background: "#333"
//             })
//         } else {
//             $(".shopjinkou").css({
//                 background: " #8035fb"
//             })
//         }
//         if (h > 1700 && h <= 2200) {
//             $(".shopbaiyuan").css({
//                 background: "#333"
//             })
//         } else {
//             $(".shopbaiyuan").css({
//                 background: " #8035fb"
//             })
//         }
//         if (h < 700) {
//             flag1 = false;
//         }
//         // console.log(flag)
//         if (flag1) {
//             $('.shopRoller_Wrap').stop(true).animate({
//                 left: 0,
//                 bottom: 0,
//                 // height:369
//             }, 100)
//         }
//         else {
//             $(".shopRoller_Wrap").stop(true).animate({
//                 left: -100,
//                 bottom: -455
//             }, 50)
//         }
//     }


// }
// toShop();







































































// 商品的ajax请求
// $('.shopRoller_list span').click(function () {
//     var index = $(this).index();
//     console.log(index);

//     $.ajax({
//         url: "../data/shopList.json",
//         data: 'get',
//         dateType: 'json',
//         success: function (json) {

//             // $('.shoplist2_Wrap').html('');
//             $.each(json,function(index,item){
//                 var newLi = `<li class="shoplist2_con1">
//                             <img class="shoplist2_conimg"  src="${json[index].imgurl}" alt="">
//                             <div class="shoplist2_box1">
//                                 <p>${json[index].p}</p>
//                                 <div class="shoplist2_box2">
//                                     <img src="../image/shoplist2_6.jpg" alt="">
//                                     <div class="shoplist2_box3">
//                                     <span>${json[index].price}</span>
//                                     <i>${json[index].kuang}</i>
//                                     </div>

//                                 </div>
//                                 <div class="shoplist2_box4">
//                                     <span>立即购买</span>
//                                     <em class=""></em>
//                                 </div>
//                             </div>
//                          </li>`;
//                 $('.shoplist2_imgs').append(newLi);

//             })  


//         }

//     })
// })