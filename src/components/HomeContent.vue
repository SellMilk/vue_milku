<template>
  <div id="index">
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
    <div class="home-container">
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
      <ul id="product-list">
        <product-list v-for="n in 4"></product-list>
      </ul>
      <p class="down">----------我是有底线的人----------</p>
    </div>
  </div>
</template>

<script>
  import ProductList from './ProductList'
  export default{
    components: {ProductList}
  }
</script>

<style>
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/animate.css";
  @import "../assets/css/index.css";
  @import "../assets/css/home.css";
</style>
