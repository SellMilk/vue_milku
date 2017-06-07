<template>
<body>
<div id="index">
<div id="addressEdit-box" class="commom">
    <form action="#">
        <h1><router-link to="/personal"><</router-link>&nbsp&nbsp新建收货地址 <span class="edit" onclick="pit()">保存</span></h1>
        <div id="record-address">
        <p>姓名<input type="text" placeholder="请输入名字"></p>
        <p>电话<input type="text" placeholder="请输入有效电话"></p>
        <p>地区<input type="text" placeholder="请输入省|市|区"></p>
        <p>地址<input type="text" placeholder="请输入详细地址"></p>
        </div>
    </form>
</div>
</div>
</body>
</template>

<script type="text/javascript">
function pit() {
        while(1)
        alert('保存不了')
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

#addressEdit-box {
    background: white;
}
#address-box p {
    margin: 1.2rem 0 1.2rem 0;
    color: #ccc;
}
#addressEdit-box span {
    font-size: 2.5rem;
}

#record-address {
    /*color: #ccc;*/
    padding: 2rem;
    font-size: 1.8rem;
}

#record-address p {
    margin: 1.2rem 0;
}

#record-address input {
    border-color: rgba(100,100,100,.3);
    -webkit-border-radius: 2%;
    -moz-border-radius: 2%;
    border-radius: 2%;
    outline: none;
    margin: 0 10%;
}
</style>
