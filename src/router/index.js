import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'

import userPage from '@/components/user/userPage'
import personal from '@/components/user/personal'
import member from '@/components/user/member'
import connect from '@/components/user/connect'
import version from '@/components/user/version'
import crop from '@/components/user/crop'
import nickname from '@/components/user/nickname'
import changepwd from '@/components/user/changepwd'
import address from '@/components/user/address'
import addressEdit from '@/components/user/addressEdit'

Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '/',
          component: Index
        },
        {
            path: '/userPage',
            component: userPage
        },
        {
            path: '/personal',
            component: personal
        },
        {
            path: '/member',
            component: member
        },
        {
            path: '/connect',
            component: connect
        },
        {
            path: '/version',
            component: version
        },
        {
            path: '/crop',
            component: crop
        },
        {
            path: '/changepwd',
            component: changepwd
        },
        {
            path: '/nickname',
            component: nickname
        },
        {
            path: '/address',
            component: address
        },
        {
            path: '/addressEdit',
            component: addressEdit
        }
    ]
})
