<template>
  <li class="product">
    <div class="product-img">
      <img src="../assets/imgs/xiyuchun.jpg" alt="">
    </div>
    <div class="product-describe">
      <a :href="'product.html'+id"><h3 class="product-title">{{title}}</h3></a>
      <div class="product-price">
        <span class="num">￥{{price}}</span>
        <span>/月</span>
      </div>
      <div class="product-info">
        <p class="product-date">保质期{{date}}天</p>
        <p class="product-num">{{num}}人订购</p>
        <p class="product-area">{{area}}</p>
      </div>
    </div>
  </li>
</template>

<script>
  export default{
      data(){
          return{
            id: '2',
            title: '西域春牛奶好喝好喝好喝好喝',
            price: '54',
            date: '3',
            num: '2133',
            area: '伊犁'
          }
      }
  }
</script>
