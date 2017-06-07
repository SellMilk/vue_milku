<template>
  <div class="seller-detail-content">
    <div class="evaluate">
        <span class="total">共计XX条评价</span>
        <!-- 评价明细，懒加载（没完成）-->
        <ul class="evaluate_detail">
          <li>评价1</li>
        </ul>
      
             <router-link :to="'/sellerevaluate/'"  class="more" >查看全部评价》》</router-link>
      
        
    </div>
    <!--营业执照，两张照片-->
    <div class="license">
      <span>营业资质</span>
      <img src="./imgs/business-licence.jpg" alt=""/>
      <img src="./imgs/hygiene-license.jpg" alt=""/>
    </div>
    <!--商家信息-->
   <div class="information">
     <span class="information-title">公司信息</span>
      <ul>
        <li><span>公司地址：</span><span>哈尔滨</span></li>
        <li><span>营业时间：</span><span>8:00-20:00</span></li>
      </ul>
   </div>
  </div>
</template>


<script>

</script>

<style>
  /*evaluate开始*/
  .evaluate{
    height: 200px;
    width: 100%;
    border-bottom: 1px solid #000000;
  }
  .evaluate .total{
    display: inline-block;
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 2.0rem;
    /*color: #eeeeee;*/
    text-align: right;
    padding-right: 10px;
    border-bottom: 1px solid #eeeeee;
  }
  .evaluate .evaluate_detail li{
    display: inline-block;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }
  .evaluate .more{
    display: inline-block;
    border: 1px solid #0096ff;
    background-color: #0096ff;
    color: #ffffff;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    font-size: 2.0rem;
    font-weight: bolder;
  }
  /*evaluate结束*/
  /*license开始*/
 .license{
   height: 150px;
   border-bottom: 1px solid #eeeeee;
   margin-top: 20px;
 }
 .license span{
   display: block;
   height: 50px;
   line-height: 50px;
   border-bottom: 1px solid #eeeeee;
   color: #555555;
   font-size: 2.0rem;
   font-weight: bolder;
 }
  /*license结束*/
  
  /*information开始*/
  .information{
    height: 100px;
  }
  .information .information-title{
   display: block;
   height: 50px;
   line-height: 50px;
   border-bottom: 1px solid #eeeeee;
   color: #555555;
   font-size: 2.0rem;
   font-weight: bolder;
 }
  .information ul li{
    height: 25px;
    line-height: 25px;
    font-size: 1.0rem;
  }
  /*information结束*/
</style>
