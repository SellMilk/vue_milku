<template>
<body>
<div id="changepwd-box" class="commom">
    <h1><router-link to="/personal"><</router-link>&nbsp&nbsp修改密码</h1>
    <form action="" method="post" class="user-chpwd">
        <p>旧的登录密码</p>
        <input type="text" name="oldpwd" class="oldpwd">
        <p>新密码</p>
        <input type="text" name="newpwd1">
        <p>在次输入密码</p>
        <input type="text" name="newpwd">
        <p><input type="submit" value="确认修改"></p>
    </form>
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
@import '../../../static/css/bootstrap.min.css';
@import '../../../static/css/index.css';
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
#changepwd-box {
    background: white;
}

.user-chpwd {
    width: 200px;
    height: 270px;
    margin: 2rem auto;
    font-size: 1.8rem;
    text-align: center;
}

.user-chpwd p {
    margin: 10px 0;
}

.user-chpwd input {
    border-color: rgba(100,100,100,.3);
    -webkit-border-radius: 2%;
    -moz-border-radius: 2%;
    border-radius: 2%;
    outline: none;
}

.user-chpwd input[type="submit"] {
    margin-top: 10px;
    width: 204px;
    height: 30px;
    background: dodgerblue;
}
.user-chpwd input[type="submit"]:active{
    opacity: 0.3;
}

</style>
