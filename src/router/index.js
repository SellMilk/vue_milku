import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import seller from '@/components/Seller'
import sellerdetail from '@/components/SellerDetail'

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
    }, {
      path: '/sellerdetail/',
      name: 'sellerdetail',
      component: sellerdetail
    }
  ]
})
