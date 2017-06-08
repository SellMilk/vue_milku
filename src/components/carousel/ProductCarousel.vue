<template>
  <!--牛奶信息图片轮播图-->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./imgs/yili.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="./imgs/yili600.png" alt=""/></div>
      <div class="swiper-slide"><img src="./imgs/xiyuchun.jpg" alt=""/></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  <!--牛奶信息轮播图结束-->
</template>

<style>
  @import "css/swiper-3.4.2.min.css";
  /*.container{*/
    /*margin: 0 auto;*/
    /*width: 100%;*/
  /*}*/
  /*轮播图开始*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide{
    width: 600px;
    /*height: 600px;*/
  }
  .swiper-wrapper img{
    width: 600px;
    /*height: 600px;*/
  }

  .swiper-wrapper{
    width: 100%;
  }
  @media (max-width: 600px) {
    .swiper-slide{
      width: 100%;

    }
    .swiper-wrapper img{
      width: 100%;
      max-width: 100%;
      min-width: 30%;

    }
    .pro-info{
      width: 100%;
    }
  }
  /*轮播图结束*/





</style>

<script>
  export default {

  }
    var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
  });


</script>
