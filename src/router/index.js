
import HelloWorld from '@/components/HelloWorld'
import AboutToi from '@/components/About'
import HomeView from '@/views/HomeView'
import * as VueRouter from 'vue-router'


  const routes = [ 
    {
      path: '/', ///path của route
      name: 'Hello', // tên route
      component: HelloWorld // component route sử dụng
    },
    {
      path: '/about',
      name: 'About',
      component: AboutToi
    },
    {
      path: '/toi',
      name: 'Toi',
      component: HomeView
    },
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router