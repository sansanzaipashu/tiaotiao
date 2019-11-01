import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Register from '../views/Register'
import Mine from '../views/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
     path:'/login',
           name:'login',
           component:Login
    },
    {
     path:'/register',
           name:'register',
           component:Register
    },
    {
     path:'/mine',
           name:'mine',
           component:Mine
    }
  ]
})
