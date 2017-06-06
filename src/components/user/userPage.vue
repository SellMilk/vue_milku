<template>
<body>
<div id="index">
    <div class="userPage-box">
    <div id="userPage-head">
        <img src="./imgs/1.jpg" alt="头像呢">
        <p>最爱喝鲜奶<span>V0</span></p>
    </div>
    <div id="userPage-data">
       <user-operation v-for="item in items" :id='item.path' :img='item.img' :message='item.message'></user-operation>
    </div>
    </div>
</div>
    <comment-footer></comment-footer>
</body>
</template>

<script>
import UserOperation from './UserOperation'
import CommentFooter from '../footer/CommentFooter'
   export default {
     data () {
       return {
         items: [
                     { path:'/personal',img:require('./imgs/1.jpg'),message: '个人资料' },
                     { path:'/s',img:require('./imgs/1.jpg'),message: '个人评价' },
                     { path:'/s',img:require('./imgs/1.jpg'),message: '我的收藏' },
                     { path:'/member',img:require('./imgs/1.jpg'),message: '会员中心' },
                     { path:'/connect',img:require('./imgs/1.jpg'),message: '联系客服' },
                     { path:'/version',img:require('./imgs/1.jpg'),message: '版本信息' }
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

#userPage-head {
    clear: both;
    height: 150px;
    display: flex;
    background: #0097ff;
    padding: 2rem 2rem;
    color: #fff;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

#userPage-head img {
    float: left;
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 50%;
}

#userPage-head p {
    font-size: 2.2rem;
    margin: 0;
    margin-left: 1.2rem;
}

#userPage-head span {
    color: gold;
    font-weight: bold;
    font-style: italic;
}
#userPage-data {
    margin: 20px 0 0 0;
    padding: 5px 20px 0;
    background: white;
}

#userPage-data a {
    display: block;
    /*margin: 1.2rem 0;*/
    padding: 5% 0;
    border-bottom: 1px solid #ddd;
    color: inherit;
    font-size: 1.8rem;
    /*box-sizing: inherit;*/
}

#userPage-data a:active {
    background: rgba(12, 23, 100, .5);
}

#userPage-data img {
    width: 20px;
}

#userPage-data span {
    float: right;
}
</style>
