import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Register from '../views/Register'
import Mine from '../views/Mine'
import Index from '@/views/Index';
import Home from '@/views/Home';
import My from '@/views/My';
import Message from '@/views/Message';
import Typ from '@/views/Typ';
import Book from '@/views/Book';
import Detail from '@/views/Detail';
import BookSend from '@/views/BookSend';
import BookSurvey from '@/views/BookSurvey';
import Pushto from '@/views/Pushto';
import Wishto from '@/views/Wishto';
import Mallto from '@/views/Mallto';
import Buyto from '@/views/Buyto';
import Mall from '@/views/Mall';
import Buy from '@/views/Buy';
import Wish from '@/views/Wish';
import Life from '@/views/Life';
import Foot from '@/views/Foot';
import Beauty from '@/views/Beauty';
import Look from '@/views/Look';
import Rname from '@/views/Rname';
import Roul from '@/views/Roul';
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
    },{
      path:'/look',
      name:'look',
      component:Look
    },{
      path:'/wish',
      name:'wish',
      component:Wish
    },{
      path:'/beauty',
      name:'beauty',
      component:Beauty
    },{
      path:'/foot',
      name:'foot',
      component:Foot
    },{
      path:'/life',
      name:'life',
      component:Life
    },{
      path:'/buy',
      name:'buy',
      component:Buy
    },{
      path:'/mall',
      name:'mall',
      component:Mall
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
    },{
      path:'/bookSend',
      name:'bookSend',
      component:BookSend
    },{
      path:'/bookSurvey',
      name:'bookSurvey',
      component:BookSurvey
    },{
      path:'/wishto',
      name:'wishto',
      component:Wishto
    },{
      path:'/pushto',
      name:'pushto',
      component:Pushto
    },{
      path:'/mallto',
      name:'mallto',
      component:Mallto
    },{
      path:'/buyto',
      name:'buyto',
      component:Buyto
    },{
      path:'/rname',
      name:'rname',
      component:Rname
    },{
      path:'/roul',
      name:'roul',
      component:Roul
    }
  ]
})
