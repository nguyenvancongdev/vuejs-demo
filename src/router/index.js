
import HelloWorld from '@/components/HelloWorld'
// import AboutToi from '@/components/About'
import UserScreen from '@/views/User'
import NotFound from '@/views/NotFound'

import * as VueRouter from 'vue-router'


  const routes = [ 
    {
      path: '/user', 
      component: UserScreen, 
      children: [
        {
          path: 'posts',
          component: HelloWorld,
        },
      ],
    },
    {path: '/', redirect: '/user/posts'},
    { path: '/:pathMatch(.*)*',  redirect: '/404' },
    { path: '/404',name: 'NotFound', component: NotFound },
    
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router