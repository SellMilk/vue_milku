<template>
<body>
<div id="index">
    <div class="commom">
        <h1><router-link to="/personal"><</router-link>&nbsp&nbsp修改头像</h1>
    </div>
<div id="portrait">
    <canvas id="myCanvas" width="200" height="200" style="border:1px solid #d3d3d3;">
        </canvas>
        <br>
        <a href="#"><input type="file" id="file"><br></a>
        <button id="getImg">截图</button>
        <img src="" alt="" id="myImg">
</div>
</div>
<comment-footer></comment-footer>

</body>
</html>
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
 #myCanvas {
            display: block;
            margin: 0 auto;
            border: solid 1px #cacaca;
        }

        #myImg {
            width: 200px;
            height: 200px;
            display: block;
            margin: 0 auto;
            border: solid 1px #cacaca;
            border-radius: 50%;
            overflow: hidden;
        }

        #file {
            width: 70px;
            overflow: hidden;
        }
        #portrait{
            margin-top: 1.3%;
            padding: 1.3% 0;
            background: #fff;
        }
</style>
