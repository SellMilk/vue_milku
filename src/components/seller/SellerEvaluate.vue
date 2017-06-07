<template>
  <div id="index">
    <seller-evaluate-header></seller-evaluate-header>
    <seller-evaluate-content></seller-evaluate-content>
    <comment-footer></comment-footer>
    <img src="" alt=""/>
  </div>
</template>

<script>
  import SellerEvaluateHeader from '../header/SellerEvaluateHeader'
  import CommentFooter from '../footer/CommentFooter'
  import SellerEvaluateContent from '../content/SellerEvaluateContent'
  export default{
    components: {SellerEvaluateHeader,SellerEvaluateContent,CommentFooter}
  }
</script>

<style>


</style>