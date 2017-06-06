<template>
<body>
    <div id="index">
        <div id="nickname-box" class="commom">
            <h1><router-link to="/personal"><</router-link>&nbsp&nbsp修改昵称</h1>
            <form action="#" method="post" class="nickname">
                <input type="text" id="user-chname" name="username" placeholder="换个好名字吧">
                <input type="submit" value="确定" class="submit">
            </form>
        </div>
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
#nickname-box {
    background: white;
}

.nickname {
    font-size: 1.8rem;
    margin: 6rem 0 0 6rem;
    padding-bottom: 1rem;
}

#user-chname {
    width: 40%;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    outline: none;
}

.submit {
    background: white;
    border: 1px solid #ccc;
    font-size: 1.6rem;
}
</style>
