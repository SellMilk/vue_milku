<template>
  <div class="carousel">
    <ul class="tips">
      <li>喝牛奶有助于身体健康喝牛奶有助于身体健康喝牛奶有助于身体健康喝牛奶有助于身体健康</li>
      <li>早上不宜空腹喝牛奶早上不宜空腹喝牛奶早上不宜空腹喝牛奶早上不宜空腹喝牛奶</li>
      <li>乳糖不耐症不能喝牛奶</li>
      <li>喝喝喝喝喝喝</li>
      <li>这这</li>
    </ul>
    <div class="dot">
      <div class="selected"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default{}
  $(function () {
    /*轮播图开始*/
    var oContainer = $('.home-container .carousel');
    var oDot = $('.home-container .dot div');
    var aTips = $('.home-container .tips li');

    var iNow = 0;
    $(aTips[iNow]).css({'display':'block'}).addClass('animated zoomIn');
    for(var i=0; i<oDot.length; i++){
      oDot[i].index = i;
      $(oDot[i]).on('click',function () {
        changeImg(this.index);
      });
    }

    function changeImg(index){
      iNow = index;
      $(oDot[iNow]).addClass('selected').siblings().removeClass('selected animated fadeIn');

      var oTip = $(aTips[iNow]);
      oTip.css({'display':'block'}).addClass('animated zoomIn').siblings().css({'display':'none'});

    }

    var timer = setInterval(function(){
      iNow++;
      if(iNow == aTips.length){
        iNow = 0;
      }
      changeImg(iNow);
    }, 5000);

    oContainer.on('mouseenter',function () {
      console.log('in');
      clearInterval(timer);
    });
    oContainer.on('mouseleave',function () {
      console.log('out');
      timer = setInterval(function(){
        iNow++;
        if(iNow == aTips.length){
          iNow = 0;
        }
        changeImg(iNow);
      }, 5000);
    });
    /*轮播图结束*/
  });
</script>

<style>
  .home-container .carousel{
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #cccccc;
    padding: 0 20px 20px 20px;
  }
  .home-container .tips{
    width: 100%;
    height: 100px;
    margin: 0;
    font-size: 2rem;
    color: #0096ff;
    overflow: hidden;
    text-align: center;
    padding-top: 20px;
  }
  .home-container .tips li{
    display: none;
    width: 100%;
    height: 100px;
  }
  .home-container .dot{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .home-container .dot div{
    width: 20px;
    height: 4px;
    display: inline-block;
    background: #0096ff;
    margin-right: 9px;
    cursor: pointer;
    transition: all .1s ease-in;
    -webkit-transition: all .1s ease-in;
  }
  .home-container .dot div:hover{
    height: 6px;
  }
  .home-container .dot .selected{
    height: 6px;
    background: #0096f0;
  }
</style>
