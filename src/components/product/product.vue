<template>
  <li class="product">
    <div class="product-img">
      <img src="./imgs/xiyuchun.jpg" alt="">
    </div>
    <div class="product-describe">
      <a href=""><h3 class="product-title">{{title}}</h3></a>
      <div class="product-price">
        <span class="num">￥{{price}}</span>
        <span>/月</span>
      </div>
      <div class="product-info">
        <p class="product-date">保质期{{date}}天</p>
        <p class="product-num">{{num}}人订购</p>
        <p class="product-area">{{area}}</p>
      </div>
    </div>
  </li>
</template>

<script>
  export default{
    data: function () {
      return {
        title: '西域春牛奶最棒西域春牛奶最棒西域春牛奶最棒',
        price: '54',
        date: '2',
        num: '543',
        area: '哈尔滨'
      }
    }
  }
</script>

<style>
  .home-container .product{
    display: block;
    width: 100%;
    height: 140px;
    border-bottom: 1px solid #cccccc;
    position: relative;
  }
  .home-container .product-img{
    position: absolute;
    height: 140px;
    width: 140px;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }
  .home-container .product-img img{
    height: 100%;
    width: 100%;
  }
  .home-container .product-describe{
    display: inline-block;
    padding-left: 145px;
    width: 100%;
    height: 100%;
  }
  .home-container .product-title{
    display: -webkit-box;
    margin-top: 5px;
    font-size: 1.8rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    height: 38px;
  }
  .home-container .product-price{
    height: 40px;
    width: 100%;
  }
  .home-container .product-price .num{
    line-height: 40px;
    font-size: 1.8rem;
    color: #c9302c;
  }
  .home-container .product-info{
    display: -webkit-box;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .home-container .product-info p{
    overflow: hidden;
    color: #999;
    font-size: 1rem;
  }
  .home-container .product-num{
    -webkit-box-flex: 1;
    text-align: center;
  }
  .home-container .product-area{
    margin-right: 5px;
  }
  @media(max-width: 330px) {
    .home-container .product-title{
      height: 35px;
    }
  }
</style>
