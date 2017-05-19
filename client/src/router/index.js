import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import PostHouse from '@/components/PostHouse'
import EditHouse from '@/components/EditHouse'
import DetailHouse from '@/components/DetailHouse'
// import MarkerDetail from '@/components/MarkerDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newhouse',
      name: 'PostHouse',
      component: PostHouse
    },
    {
      path: '/edithouse',
      name: 'EditHouse',
      component: EditHouse
    },
    {
      path: '/detailhouse',
      name: 'DetailHouse',
      component: DetailHouse
    }
  ]
})