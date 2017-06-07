<template>
  <footer class="home-footer">
    <a href="javascript:">
      <div class="col-xs-4 item">
        <div>
          <p class="glyphicon glyphicon-glass"></p>
          <span>牛奶</span>
        </div>
      </div>
    </a>
    <a href="javascript:">
      <div class="col-xs-4 item">
        <div>
          <p class="glyphicon glyphicon-list-alt"></p>
          <span>订单</span>
        </div>
      </div>
    </a>
    <a href="/#/userPage">
      <div class="col-xs-4 item">
        <div>
          <p class="glyphicon glyphicon-user"></p>
          <span>我</span>
        </div>
      </div>
    </a>
  </footer>
</template>

<script>
  export default{}
</script>

<style>
  /*底部导航栏样式开始*/
  .home-footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    border-top: 1px solid #cccccc;
  }
  .home-footer .item{
    height: 100%;
    text-align: center;
    padding-top: 10px;
  }
  .home-footer div{
    display: inline-block;
  }
  .home-footer .item p{
    display: block;
    font-size: 1.8rem;
    margin: 0;
  }
  .home-footer .item span{
    font-size: 1.2rem;
  }
  /*底部导航栏样式结束*/

</style>
