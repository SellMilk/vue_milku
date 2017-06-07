<template>
    <div class="seller-evaluate-header">
        <div class="return-sellerdetail">
            <router-link to="/sellerdetail"></router-link>
            <span>评价详情</span>
        </div>
    </div>
</template>


<<script>
export default {

}
</script>


<<style>
.return-sellerdetail{
    height: 50px;
    width: 100%;
    background: rgba(30,144,255,0.5);
}
.return-sellerdetail a{
    display: inline-block;
    width: 32px;
    height:32px;
    background: url("./imgs/left.png");
    margin-top:9px;
    float: left;
}
.return-sellerdetail span{
    display: inline-block;
    height: 100%;
    line-height: 50px;
    text-align: center;
    float: left;
    margin-left: 20px;
    font-size: 2.0rem;
    font-weight: bolder;
}
</style>

