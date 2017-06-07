<template>
  <div class="evaluate">
    <div class="wrapper">
      <span class="total">共计XX条评价</span>
      <!-- 评价明细，懒加载（没完成）-->
      <ul class="evaluate_detail">
        <li>评价1</li>
      </ul>
      <button  class="more btn-default" >
        加载更多。。。
      </button>
    </div>
  </div>
</template>


<script>

</script>

<style>
  /*evaluate开始*/
  .evaluate .total{
    display: inline-block;
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 2.0rem;
    color: #eeeeee;
    text-align: right;
    border-bottom: 1px solid #eeeeee;
  }
  .evaluate .evaluate_detail li{
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }
  .evaluate .more{
    border: 1px solid #0096ff;
    background-color: #0096ff;
    color: #ffffff;
    border-radius: 6%;
    width: 100px;
    height: 50px;
    margin: 0 auto;
  }
  /*evaluate结束*/
</style>
