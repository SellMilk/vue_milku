<template>
<body>
<div class='userPage'>
    <div id="index">
        <div class="commom">
            <h1><router-link to="/userPage"><</router-link>&nbsp&nbsp个人资料</h1>
            <div id="user-content">
                  <user-operation v-for="item in items" :id='item.path' :message='item.message'></user-operation>
            </div>
        </div>
    </div>
        <comment-footer></comment-footer>
</div>
</body>
</template>

<script type="text/javascript">
import UserOperation from './UserOperation'
import CommentFooter from '../footer/CommentFooter'
   export default {
     data () {
       return {
         items: [
                    { path:'/crop',message: '头像' },
                    { path:'/nickname',message: '昵称' },
                    { path:'/changepwd',message: '密码修改' },
                    { path:'/address',message: '收货地址' }
                  ]
       }
     },
     components:{
       UserOperation,
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
#user-content {
    background: white;
    padding: 0 5%;
    margin-top: 1.3%;
}

#user-content a {
    display: block;
    border-bottom: 1px solid #ddd;
    /*margin: 1.2rem 0 1.2rem 0;*/
    padding: 5% 0;
    font-size: 1.8rem;
    color: inherit;
    box-sizing: inherit;
}

#user-content a:active {
    background: rgba(12, 23, 100, .5);
}

#user-content span {
    /*padding-right: 1.5rem;*/
    float: right;
}

</style>
