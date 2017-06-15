import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import seller from '@/components/seller/Seller'
import sellerdetail from '@/components/seller/SellerDetail'
import sellerevaluate from '@/components/seller/SellerEvaluate'
import userPage from '@/components/user/userPage'
import ProductInfo from '@/components/product/ProductInfo'
import manageIndex from '@/components/manage/manageIndex'
import manageProductList from '@/components/manage/manageProductList'
import manageOrderList from '@/components/manage/manageOrderList'
import manageUpdateInfo from '@/components/manage/manageUpdateInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
     {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/sellerdetail',
      name: 'sellerdetail',
      component: sellerdetail
    },
    {
      path: '/sellerevaluate',
      name: 'sellerevaluate',
      component: sellerevaluate
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: userPage
    },
    {
      path: '/product',
      name: 'ProductInfo',
      component: ProductInfo
    },
    {
      path: '/manageIndex',
      name: 'manageIndex',
      component: manageIndex
    },
    {
      path: '/manageProductList',
      name: 'manageProductList',
      component: manageProductList
    },
    {
      path: '/manageOrderList',
      name: 'manageOrderList',
      component: manageOrderList
    },
    {
      path: '/manageUpdateInfo',
      name: 'manageUpdateInfo',
      component: manageUpdateInfo
    }
    // ,
    // {
    //   path: '/manageUpdateDel',
    //   name: 'manageUpdateDel',
    //   component: manageUpdateDel
    // }
  ]
})
