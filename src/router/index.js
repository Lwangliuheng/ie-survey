import Vue from 'vue'
import Router from 'vue-router'
import surveyContant from  '@/page/surveyContant'
import login from '@/page/login'
import historyCase from '@/page/historyCase'
import message from '@/page/message'
import takePicHelps from '@/components/takePicHelps'
import applicationBook from '@/page/applicationBook'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/surveyContant',
      component: surveyContant,
      // children: [{
      //   path: '/',
      //   component: caseManage
      // }, {
      //   path: '/seatManage',
      //   component: seatManage
      // }, {
      //   path: '/institutionManage',
      //   component: institutionManage,
      //   children:[{
      //     path:'/insitutionEditor',
      //     component: insitutionEditor,
      //   }]
      // }]
    },
    {
      path: '/',
      component: login
    },
    {
      path: '/historyCase',
      component: historyCase
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/applicationBook',
      component: applicationBook
    },
    {
      path: '/takePicHelps',
      component: takePicHelps
    }
  ]
})

