<template>
  <!--牛奶菜单：主菜单为牛奶商品和对商家的评价；选项卡；所有的懒加载
      牛奶商品：分为牛奶的品种和具体的牛奶，具体的牛奶链接到牛奶详情；懒加载
      商家评价：未完成-->
  <div class="seller-milk">
    <!-- 主菜单-->
    <ul class="seller-main-menu">
      <li class="selected"><a href="javascript:">我的牛奶</a></li>
      <li><a href="javascript:">评价</a></li>
    </ul>
    <!-- 具体的牛奶商品：牛奶z的分类以及具体的牛奶-->
    <div class="seller-sub-menu selected">
      <!-- 牛奶分类-->
      <ul class="seller-milk-details-type">
        <li class="selected">鲜牛奶</li>
        <li>高温灭菌奶</li>
        <li>酸牛奶</li>
        <li>奶制品</li>
      </ul>
      <!-- 具体的牛奶-->
      <div class="seller-milk-details-content">
        <ul class="selected">
          <li>
            <!--！！！！添加商品列表组件，现在的组件是首页的，应该商品详情页组件-->
            <product></product>
          </li>
        </ul>
        <ul>
          <li>百利包</li>
        </ul>
        <ul>
          <li>酸牛奶</li>
        </ul>
        <ul>
          <li>大果粒</li>
        </ul>
      </div>
    </div>
    <!-- 对商家的评价未完成-->
    <div class="seller-sub-menu">
      评价。。。。。。
    </div>
  </div>
</template>


<script>
  import product from '../product/product'
  export default{
    components: {product}
  }
</script>


<style>
  /*seller-milk开始*/
  .seller-milk{
    position: relative;
  }
  .seller-milk .seller-main-menu{
    display: -webkit-box;
    text-align: center;
    border-bottom: 1px solid #eeeeee;
    height: 30px;
    line-height: 30px;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .seller-milk .seller-main-menu li{
    /*float: left;*/
    -webkit-box-flex: 1;
    /*display: inline-block;*/
    /*height: 20px;*/
  }
  .seller-milk .seller-main-menu li a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .seller-milk .seller-main-menu li.selected{
    color: blue;
    border-bottom: 1px solid #007aff;
  }

  .seller-milk .seller-sub-menu{
    display: none;
  }
  .seller-milk .seller-sub-menu.selected{
    display: block;
  }
  .seller-milk-details-type{
    height: 200px;
    width: 100px;
  }
  .seller-milk-details-type li{
    display: inline-block;
    width: 100%;
    height: 50px;
    border: 1px solid #999999;
    text-align: center;
    line-height: 50px;
    background: #eeeeee;
    font-size: 1.5rem;
  }
  .seller-milk-details-type li.selected{
    background: #FFFFFF;
    /*opacity: 0.5;*/
    color: #000000;
    border-left: 2px solid blue;
  }
  .seller-milk-details-content ul{
    display: none;
    font-size: 1.5rem;
  }
  .seller-milk-details-content ul.selected{
    display: block;
  }
  .seller-milk-details-content{
    position: absolute;
    left: 110px;
    top: 45px;
    /*width: 200px;*/
  }
  .seller-milk-details-content ul{
    height: 100px;
    width: 300px;
  }
  .seller-milk-details-content li{
    display: inline-block;
    /*width: 200px;*/
    height: 100px;
    position: relative;
    margin-top: 20px;
  }
  .seller-milk-details-content li .milk-logo{
    width: 50px;
    height: 50px;
  }
  .seller-milk-details-content li .milk-title{
    position: absolute;
    top: 0;
    left: 60px;
    width: 200px;
    height: 20px;
    text-align: left;
    line-height: 20px;
    font-size: 1.6rem;
  }
  .seller-milk-details-content li .milk-introduction{
    position: absolute;
    top: 20px;
    left: 60px;
    width: 200px;
    height: 30px;
    font-size: 0.8rem;
  }
  .seller-milk-details-content li .milk-price{
    position: absolute;
    top: 50px;
    left: 60px;
    font-size: 1.8rem;
    color: red;
    font-weight: bolder;
  }
  .seller-milk-details-content li .milk-add{
    position: absolute;
    top: 0px;
    left: 200px;
  }
  /*seller-milk结束*/
</style>
