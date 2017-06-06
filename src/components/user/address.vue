<template>
<body>
<div id="index">
<div id="address-box" class="commom">
    <h1><router-link to="/personal"><</router-link>&nbsp&nbsp收货地址 <a href="/#/addressEdit" class="edit">+</a></h1>
    <div id="address-message">
        <span class="name">张三</span>&nbsp&nbsp<span class="">12345678910</span>
        <span class="delete">删除</span>
        <p><span>[默认]</span><span class="detailed-address">黑龙江省哈尔滨市香坊区 东北林业大学</span></p>
    </div>
</div>
</div>
</body>
</template>

<script type="text/javascript">

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

#address-box{
    background: white;
}

.edit {
    float: right;
    padding-right: 1.5rem;
}

.delete {
    float: right;
    padding-right: 1.5rem;
    color: red;
}

#address-message {
    margin-top: 2rem;
    font-size: 1.8rem;
}

#address-box p {
    margin: 1.2rem 0 1.2rem 0;
    color: #ccc;
}

#address-message p span {
    color: steelblue;
}
</style>
