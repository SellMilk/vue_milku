<template>
  <div id="index">
    <div class="wrapper">
      <seller-header></seller-header>
      <seller-content></seller-content>
    </div>
  </div>
</template>


<script>
  import SellerHeader from '../header/SellerHeader'
  import SellerContent from '../content/SellerContent'
  export default{
    components: {SellerHeader,SellerContent}
  }
</script>


<style>

</style>
