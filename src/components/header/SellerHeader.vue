<template>
   <!-- header：包含返回，购物车（总的），小菜单，图标均用背景图片；小菜单点击会有弹层弹出菜单-->
    <div class="seller-header">
        <!-- 商家详情的简述版，点击跳转到最详细的商家详情页-->
        <div class="seller-details">
            <!--返回主页-->
            <span class="return">
                <router-link :to="'/'"></router-link>
            </span>
            <!-- 商家logo-->
            <img src="./imgs/logo.jpg" alt="" class="seller-logo"/>
            <!-- 商家名称-->
            <span class="seller-name">伊利</span>
            <!-- 配送信息-->
            <ul class="seller-expressage">
                <li>商家配送<span></span></li>
                <li>平均xx分钟<span></span></li>
                <li>免配送费</li>
            </ul>
            <!-- 公告-->
            <p class="seller-notice" style="line-height:normal">
                公告：内蒙古伊利实业集团股份有限公司（简称伊利集团）是中国规模最大、
                产品线最全的乳制品企业，位居亚洲乳业第一、全球乳业八强，也是唯一一家同时符合奥运及世博标准，并
                为奥运会及世博会提供过乳制品的中国乳品企业。在董事长潘刚的带领下，2015年伊利集团营收首破600亿
                元，收入和净利润实现双增长。在“全球织网”的战略下，伊利已经实现国际化布局。作为行业龙头企业，伊
                利集团旗下多款产品长期居市场领先地位，整体营业额在行业中遥遥领先，是唯一一家进入全球排名前八的
                亚洲乳企。
            </p>
            <!-- 优惠活动-->
            <p class="seller-discount">
                <span>优惠活动：</span><br>
                满30减5<br>
                满30减5<br>
                满30减5<br>
                满30减5<br>
                满30减5<br>
                满30减5<br>
                满30减5<br>
                满30减5<br>
                满30减5
            </p>
            <!-- 跳转到商家具体详情页的向右箭头-->
            <span class="seller-skip">
                <!--！！！！！！跳转到详情页的路由-->
                <router-link :to="'/sellerdetail/'"></router-link>
            </span>
        </div>
    </div>
</template>



<script>
    import Index from '../Index'
	import SellerDetail from '../seller/SellerDetail'
    export default{
        components: {Index,SellerDetail}
        }
</script>


<style>
    /*header开始*/
.seller-header {
    height: 200px;
    border-bottom: 1px solid #000000;
    background: rgba(30,144,255,0.5);
}
.seller-header .seller-details{
    height: 200px;
    padding-top: 20px;
    position: relative;
}
.seller-header .seller-details .return{
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url("./imgs/left.png") ;
    position: absolute;
    top: 84px;
    left: 10px;
}
.seller-header .seller-details .return a{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.seller-header .seller-details .seller-logo{
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50px;
}
.seller-header .seller-details .seller-name{
    display: inline-block;
    height:20px;
    line-height: 20px;
    margin-left: 20px;
    font-size: 2.0rem;
    color: red;
    font-weight: bolder;
    position: absolute;
    left: 140px;
    top:30px;

}
.seller-header .seller-details .seller-expressage{
    position: absolute;
    top:45px;
    left: 140px;
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
}
.seller-header .seller-details .seller-expressage li{
    float: left;
    font-size: 0.6rem;
}
.seller-header .seller-details .seller-expressage span{
    display: inline-block;
    width: 1px;
    height:10px;
    background: #888888;
    margin-left: 5px;
    margin-right: 5px;
}
.seller-header .seller-details .seller-notice{
    width: 178px;
    height: 30px;
    position: absolute;
    top: 70px;
    left: 140px;
    font-size: 0.5rem;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    overflow:hidden;
    text-overflow:ellipsis;
}
.seller-header .seller-details .seller-discount{
    height: 70px;
    position: absolute;
    left: 50px;
    top: 100px;
    width: 100%;
    margin-top: 10px;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
}
.seller-header .seller-details .seller-discount span{
    color:red;
    font-weight: bolder;
    font-size: 1.6rem;
}
.seller-header .seller-details .seller-skip{
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url("./imgs/1.png");
    position: absolute;
    top: 84px;
    right: 10px;
}
.seller-header .seller-details .seller-skip a{
    display: block;
    width: 100%;
    height:100%;
}
/*header结束*/
</style>
