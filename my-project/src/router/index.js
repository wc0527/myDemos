import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Send from '@/components/send'
import BoxSplit from '@/components/BoxSplit'
import OpenWindow from '@/components/OpenWindow'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Send',
      name: 'Send',
      component: Send
    }
    ,
    {
      path: '/BoxSplit',
      name: 'BoxSplit',
      component: BoxSplit
    },
    {
      path: '/OpenWindow',
      name: 'OpenWindow',
      component: OpenWindow
    }
  ]
})
