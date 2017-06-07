<template>
  <div id="index">
    <div class="wrapper">
      <seller-header></seller-header>
      <seller-content></seller-content>
      <comment-footer></comment-footer>
    </div>
  </div>
</template>


<script>
  import SellerHeader from './header/SellerHeader'
  import SellerContent from './content/SellerContent'
  import CommentFooter from './footer/CommentFooter'
  export default{
    components: {SellerHeader,SellerContent,CommentFooter}
  }
</script>


<style>

</style>
