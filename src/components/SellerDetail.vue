<template>
  <div id="index">
    <seller-detail-header></seller-detail-header>
    <seller-detail-content></seller-detail-content>
    <comment-footer></comment-footer>
  </div>
</template>

<script>
  import SellerDetailHeader from './header/SellerDetailHeader'
  import CommentFooter from './footer/CommentFooter'
  import SellerDetailContent from './content/SellerDetailContent'
  export default{
    components: {SellerDetailHeader,SellerDetailContent,CommentFooter}
  }
</script>

<style>


</style>
