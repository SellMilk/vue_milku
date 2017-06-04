<template>
  <div>
    <home-content></home-content>
    <comment-footer></comment-footer>
  </div>
</template>

<script>
  import CommentFooter from './footer/CommentFooter'
  import HomeContent from './HomeContent'
export default {
  components: {CommentFooter,HomeContent},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
