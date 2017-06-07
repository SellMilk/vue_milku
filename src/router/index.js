import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import seller from '@/components/seller/Seller'
import sellerdetail from '@/components/seller/SellerDetail'
import sellerevaluate from '@/components/seller/SellerEvaluate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/seller/',
      name: 'seller',
      component: seller
    }, 
    {
      path: '/sellerdetail/',
      name: 'sellerdetail',
      component: sellerdetail
    },
    {
      path: '/sellerevaluate/',
      name: 'sellerevaluate',
      component: sellerevaluate
    }
  ]
})
