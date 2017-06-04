<template>
  <header class="home-header">
    <div class="wrapper">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="找你喜欢的牛奶">
        <span class="input-group-btn">
                      <button class="btn btn-default" type="button">查找</button>
                  </span>
      </div>
      <span class="hot-word">伊利</span>
      <span class="hot-word">蒙牛</span>
      <span class="hot-word">光明</span>
      <span class="hot-word">刘颖</span>
      <span class="hot-word">西域春</span>
    </div>
  </header>
</template>

<script>
  export default{}
  $(function () {
    $('.home-header .hot-word').on('click',function () {
      $('.home-header input').val($(this).html());
    })
  });

</script>

<style>
  .home-header{
    height: 120px;
    width: 100%;
    background: #0096ff;
    padding: 0 50px 0 50px;
  }
  .home-header .hot-word{
    display: inline-block;
    margin: 10px 1% 10px 10px;
    cursor: pointer;
    color: #ffffff;
  }
  .home-header .input-group{
    padding-top: 43px;
  }
  .home-header .form-control{
    border-radius: 50px;
    -webkit-border-radius: 50px;
  }
  .home-header .btn{
    border-radius: 50px;
    -webkit-border-radius: 50px;
    outline: none;
  }
</style>
