<template>
  <div id="main-index">
    <div id="index">
      <v-header></v-header>
      <div class="home-container">
        <v-carousel></v-carousel>
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
