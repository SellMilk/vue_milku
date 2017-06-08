<template>
   <div id="product-info">
     <product-carousel></product-carousel>
     <div class="pro-info container">
       <h3>伊利正品纯牛奶</h3>  <!--牛奶名字 -->
       <!-- 牛奶的一些说明描述-->
       <p class="pro-description">wom保证纯天然   比USA刚才说的 山东参加反而 喝正品伊利纯牛奶，健康美丽都来找你 拉啦阿拉啦咯啦啦啦啦啦啦了啦啦啦啦啦啦拉拉啦 阿卡啊啊</p>
       <!-- 牛奶的一些说明描述结束-->
       <div class="product-price">
         <span class="num">￥74</span>
         <span>/月</span>
       </div>
       <button  class="book btn-sty">
         我要订
       </button>
       <div class="product-info">
         <p class="product-date">保质期3天</p>
         <p class="product-num">2131人订购</p>
         <p class="product-area">哈尔滨</p>
       </div>

       <div class="pro-evaluation">
       商品评价（好评率<span>97%</span>）
       </div>
     <product-evaluation></product-evaluation>
       <button  class="more-evaluation btn-sty">
         更多评价
       </button>
   </div>

     <common-footer></common-footer>
   </div>
</template>

<script>
  import ProductCarousel from '../carousel/ProductCarousel'
  import ProductEvaluation from './ProductEvaluation'
  import CommonFooter from '../footer/CommentFooter'
  export default{
    components:{
       ProductCarousel,
       ProductEvaluation,
      CommonFooter
    }
  }
</script>

<style>
  .container{
    margin: 0 auto;
    width: 100%;
  }
   /*牛奶信息样式开始*/
  .product-price{
    height: 40px;
    width: 100%;
  }
  .product-price .num{
    line-height: 40px;
    font-size: 1.8rem;
    color: #c9302c;
  }
  .product-price{
    display: inline;
  }
  .book{
    float: right;
  }
  .product-info{
    display: -webkit-box;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .product-info p{
    overflow: hidden;
    color: #999;
    font-size: 1rem;
  }
  .product-num{
    -webkit-box-flex: 1;
    text-align: center;
  }
  .product-area{
    margin-right: 5px;
  }
  .pro-evaluation{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #cccccc;
  }

  .btn-sty{
    border: 1px solid #0096ff;
    background-color: #0096ff;
    color: #ffffff;
    border-radius: 6%;
    width: 75px;
    height: 30px;

  }
  .more-evaluation{
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  /*牛奶信息样式结束*/
</style>
