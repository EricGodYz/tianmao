// 加载模块
$('.nav').load('./header.html');

$('.footer').load('./bottom.html');

// 实现方法放大镜的效果
// 实现两个蒙版的隐藏与消失


// 数据的渲染
var code = localStorage.getItem('shoplist2_con1');
var code = JSON.parse(code);
console.log(code[0].code);



// 进行商品列表的全部渲染
$.ajax({
    url:'../data/shopDetail.json',
    type:'get',
    dataType:'json',
    success:function(json){
        $.each(json,function(index,item){
            console.log(json);
            if(code[0].code === json[index].code){
                // $('.shopDetailSum').html('');
                console.log(json);
                console.log(json[index].code);
                var newDiv = `
                            <div class="shopDetail1">
                                <div class="shopDetailWrap1">
                                    <a href='./shopList.html'><img src="../image/shopdetail_1.jpg" alt=""></a>
                                </div>
                            </div>

                            <!-- 中间内容1 -->
                            <div class="shopDetail2">
                                <div class="shopDetailWrap2">
                                    <!-- 内容左边 -->
                                    <div class="shopDetail_left">
                                        <div class="shopDetail_l1">
                                            <img src="${json[index].imgurl}" alt="">
                                            <div class="shopDetail_mask"></div>
                                        </div>

                                        <ul class="shopDetail_l2">
                                            <li><img src="${json[index].imgurl}" alt=""></li>
                                            <li><img src="../image/shopdetail_3.jpg" alt=""></li>
                                            <li><img src="../image/shopdetail_4.jpg" alt=""></li>
                                            <li><img src="../image/shopdetail_5.jpg" alt=""></li>
                                            <li><img src="../image/shopdetail_6.jpg" alt=""></li>
                                        </ul>
                                        <div class="shopDetail_l3">
                                            <div class="shopdetail_l3con">
                                                <img src="../image/detail_logo1.png" alt="">
                                                <span>收藏商品</span>
                                                <em>(205人气)</em>
                                            </div>
                                            <span>举报</span>
                                        </div>

                                    </div>
                                    <!-- 内容中间 -->
                                    <div class="shopDetail_center">
                                        <div class="shopdetail_l1max">
                                            <img src="${json[index].imgurl}" alt="">
                                        </div>
                                        <div class="shopDe_con1">
                                            <h1>acornfresh 新西兰进口三文鱼 新鲜冷冻海鲜生鲜帝王三文鱼肉400g</h1>
                                            <p>${json[index].tits}</p>
                                        </div>
                                        <div class="shopDe_con2">
                                            <img src="../image/shopdetail_con1.png" alt="">
                                            <p>此商品活动中，请尽快购买！</p>
                                        </div>
                                        <div class="shopDe_con3">
                                            <dl class="shopDe_con31">
                                                <dt>价格</dt>
                                                <dd>
                                                    <i>￥</i>
                                                    <em>${json[index].price}</em>
                                                </dd>
                                            </dl>
                                            <dl class="shopDe_con32">
                                                <dt>吃货狂欢价</dt>
                                                <dd>
                                                    <i>￥</i>
                                                    <em>${json[index].kuang}</em>
                                                </dd>
                                            </dl>
                                            <div class="shopDe_con33">
                                                淘金币可抵扣商品价格3%
                                            </div>
                                        </div>



                                        <dl class="shopDe_con4">
                                            <dt>运费</dt>
                                            <dd>
                                                <div> 上海 至 深圳 罗湖区 快递 0.00</div>
                                                <p><img src="../image/shopDe_con3.png" alt="">现在下单，预计8月19日送达</p>
                                            </dd>
                                        </dl>
                                        <ul class="shopDe_con5">
                                            <li>
                                                <span>月销量</span>
                                                <i>19</i>
                                            </li>
                                            <li>
                                                <span>累计评价</span>
                                                <i>59</i>
                                            </li>
                                            <li>
                                                <span>送天猫积分</span>
                                                <i>104</i>
                                            </li>
                                        </ul>

                                        <dl class="shopDe_con6">
                                            <dt>版本</dt>
                                            <dd>
                                                <div class="shopDe_con61">
                                                    <a href="">【三文鱼】辅食三文鱼（50g*5小包）</a>
                                                </div>
                                                <div class="shopDe_con61">
                                                    <a href="">【三文鱼】辅食三文鱼（50g*5小包）</a>
                                                </div>
                                                <div class="shopDe_con61">
                                                    <a href="">【三文鱼】辅食三文鱼（50g*5小包）</a>
                                                </div>
                                                <div class="shopDe_con61">
                                                    <a href="">【三文鱼】辅食三文鱼（50g*5小包）</a>
                                                </div>
                                                <div class="shopDe_con61">
                                                    <a href="">【三文鱼】辅食三文鱼（50g*5小包）</a>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl class="shopDe_con7">
                                            <dt>花呗分期</dt>
                                            <dd>
                                                <h1><span>登录</span>后确认是否享有该服务<i>什么是花呗分期</i> </h1>
                                                <div class="shopDe_con71">
                                                    <span>￥71.26*3期</span>
                                                    <i>含手续费</i>
                                                </div>
                                                <div class="shopDe_con71">
                                                    <span>￥71.26*3期</span>
                                                    <i>含手续费</i>
                                                </div>
                                                <div class="shopDe_con71">
                                                    <span>￥71.26*3期</span>
                                                    <i>含手续费</i>
                                                </div>
                                            </dd>
                                        </dl>

                                        <div class="shopDe_con8">
                                            <div class="shopDe_con81">
                                                立即购买
                                            </div>
                                            <div class="shopDe_con82">
                                                <img src="../image/shopdetail_con3.png" alt="">
                                                <span> 加入购物车</span>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- 内容右边 -->
                                    <div class="shopDetail_right">

                                    </div>
                                </div>
                        </div>`;
                    $('.shopDetailSum').append(newDiv);

            }
        })
    }
})




function move() {
    // var shopLeft = $('.shopDetail_l1');
    // var shopMask = $('.shopDetail_mask');
    // var shopLeftBox = $(".shopdetail_l1max");
    // var shopLeftImg = $('.shopdetail_l1max img');
    // 给未来的元素添加属性
    $('.shopDetailSum').on('mouseenter', '.shopDetail_l1', function () {
        $('.shopDetail_mask').css('display', 'block');
        $(".shopdetail_l1max").css('display', 'block');
    });

    $('.shopDetailSum').on('mouseleave', '.shopDetail_l1', function () {
        $('.shopDetail_mask').css('display', 'none');
        $(".shopdetail_l1max").css('display', 'none');
    });



    $('.shopDetailSum').on('mousemove', '.shopDetail_l1', function (ev) {
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
   
    $('.shopDetailSum').on('mouseenter', '.shopDetail_l2 li', function () {
        var index = $(this).index();
        console.log(index);
        $('.shopDetail_l1 img').attr('src', '../image/shopdetail_'+(index+2) +'.jpg')
        $('.shopdetail_l1max img').attr('src', '../image/shopdetail_' +(index+2)+'s.jpg');
    })
}
add();
