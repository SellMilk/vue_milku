<template>
<body>
<div id="index">
    <div class="commom">
        <h1><router-link to="/userPage"><</router-link>&nbsp&nbsp会员中心</h1>
    </div>
    <p class="member">如何成为会员？</p>
    <h4>凡在此一次性消费超过200￥的同学即可升级为一级会员，消费超过1000￥的同学可升级为
        二级会员，超过2000￥的同学可升级为三级会员，超过3000￥的同学可升级为四级会员
        超过5000￥的同学可升级为五级会员
    </h4>
    <p class="member">成为会员有什么用？</p>
    <h4>会员等级会随着消费而更改标志，昵称旁边可查看当前会员等级</h4>
</div>
<comment-footer></comment-footer>
</body>
</template>

<script>
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
.member{
    background: white;
    margin: 1rem 0;
    padding: 2rem;
    font-size: 2rem;
}
h4 {
    background: white;
}
</style>
