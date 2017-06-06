<template>
<body>
<div id="index">
    <div class="commom">
        <h1><router-link to="/userPage"><</router-link>&nbsp&nbsp联系客服</h1>
    </div>
<p class="phone">联系热线:11012011912580</p>
</div>
<comment-footer></comment-footer>
</body>
</template>

<script type="text/javascript">
import CommentFooter from '../footer/CommentFooter'
   export default {
     components:{
       CommentFooter
     }
   }
</script>

<style type="text/css">
body {
    background: rgb(244, 244, 244);
}

.commom h1 {
    background: white;
    margin: 0;
    line-height: 6rem;
    font-size: 3rem;
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 5px rgba(0, 0, 0, .2);
}

.commom h1 a {
    width: 39px;
    height: 39px;
    font-size: 3.4rem;
}
.member, .phone, .version {
    background: white;
    margin: 1rem 0;
    padding: 2rem;
    font-size: 2rem;
}
</style>
