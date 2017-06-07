<template>
    <div class="seller-detail-header">
        <div class="return-seller">
            <router-link to="/seller"></router-link>
            <span>商家详情</span>
        </div>
        <div class="seller-introduction">
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
            <p class="seller-notice">
                <span>公司简介：</span><br>
                内蒙古伊利实业集团股份有限公司（简称伊利集团）是中国规模最大、
                产品线最全的乳制品企业，位居亚洲乳业第一、全球乳业八强，也是唯一一家同时符合奥运及世博标准，并
                为奥运会及世博会提供过乳制品的中国乳品企业。在董事长潘刚的带领下，2015年伊利集团营收首破600亿
                元，收入和净利润实现双增长。在“全球织网”的战略下，伊利已经实现国际化布局。作为行业龙头企业，伊
                利集团旗下多款产品长期居市场领先地位，整体营业额在行业中遥遥领先，是唯一一家进入全球排名前八的
                亚洲乳企。
            </p>
         </div>
    </div>
</template>
<script>

</script>
<style>
/*header开始*/
.return-seller{
    height: 50px;
    width: 100%;
    background: rgba(30,144,255,0.5);
}
.return-seller a{
    display: inline-block;
    width: 32px;
    height:32px;
    background: url("./imgs/left.png");
    margin-top:9px;
    float: left;
}
.return-seller span{
    display: inline-block;
    /*margin-top: 9px;*/
    height: 100%;
    /*width: 80%;*/
    line-height: 50px;
    text-align: center;
    float: left;
    margin-left: 20px;
    font-size: 2.0rem;
    font-weight: bolder;
}
/*header结束*/
/*seller-introduction开始*/
.seller-introduction{
    margin-top: 20px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #000000;
}
.seller-introduction .seller-logo{
    width: 80px;
    height: 80px;
    margin: 5px;
}
.seller-introduction .seller-name{
    display: inline-block;
    height:40px;
    line-height: 40px;
    margin-left: 20px;
    font-size: 3.0rem;
    font-weight: bolder;
}
.seller-introduction .seller-expressage{
    position: absolute;
    top:60px;
    left: 110px;
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
}
.seller-introduction .seller-expressage li{
    float: left;
    font-size: 1.6rem;
}
.seller-introduction .seller-expressage span{
    display: inline-block;
    width: 2px;
    height:10px;
    background: #eeeeee;
    margin-left: 5px;
    margin-right: 5px;
}
.seller-introduction .seller-notice span{
    color: #555555;
    font-size: 2.0rem;
    font-weight: bolder;
}
.seller-introduction .seller-notice{
    width: 100%;
    height: 200px;
    background: #eeeeee;
    font-size: 1.0rem;
    margin-top: 10px;
    text-indent:10px;

}
/*seller-introduction结束*/
</style>
