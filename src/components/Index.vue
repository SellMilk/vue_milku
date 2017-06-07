<template>
  <div>
    <div id="index">
      <v-header></v-header>
      <div class="home-container">
        <v-carousel></v-carousel>
        <div class="seller-list">
          <router-link :to="'/seller/'"><h3>商家列表</h3></router-link>
        </div>
        <ul id="product-list">
          <v-product></v-product>
          <v-product></v-product>
          <v-product></v-product>
          <v-product></v-product>
        </ul>
        <p class="down">----------我是有底线的人----------</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './header/header'
  import footer from './footer/CommentFooter'
  import carousel from './carousel/carousel'
  import product from './product/product.vue'

  export default{
    components:{
      'v-header': header,
      'v-footer': footer,
      'v-carousel': carousel,
      'v-product': product
    }
  }
</script>

<style>

</style>
