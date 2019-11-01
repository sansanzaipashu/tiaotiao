import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Register from '../views/Register'
import Mine from '../views/Mine'
import Index from '@/views/Index';
import Home from '@/views/Home';
import My from '@/views/My';import Message from '@/views/Message';
import Typ from '@/views/Typ';
import Book from '@/views/Book';
import Detail from '@/views/Detail';
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      redirect:'/home',
      name:'index',
      component:Index,
      children:[
        {
          path:'/home',
          name:'home',
          component:Home,
         
        },
        {
          path:'/my',
          name:'my',
          component:My
        },
        {
          path:'/message',
          name:'message',
          component:Message
        },
        {
          path:'/typ',
          name:'typ',
          component:Typ
        },
      ]
    },
    {
      path:'/book',
      name:'book',
      component:Book
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },
{
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
