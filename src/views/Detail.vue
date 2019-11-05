<template>
  <div>
<!-- 标题 -->
      <van-nav-bar
 
  left-text=""
  left-arrow
  @click-left="onClickLeft"
  :fixed="true"
/>
<!-- 详情 -->
 <ul id="shuju">
        <li>
            <img :src="list.coverImg" alt="">
            <p>{{list.descriptions}}</p>
            <p>{{list.name}}</p>
            <span>{{list.price}}元</span>
            
            
        </li>
    </ul>
<!-- 底部 -->
  <van-goods-action>
      
      <van-goods-action-icon icon="wap-home" @click="onClickCart">
        他的主页
      </van-goods-action-icon>
      <van-goods-action-icon icon="comment" @click="sorry">
        举报
      </van-goods-action-icon>
      <!-- <van-goods-action-button type="warning" @click="sorry">
        加入购物车
      </van-goods-action-button> -->
      <van-goods-action-button type="danger" @click="sorry">
        马上购买
      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from 'axios';
export default {
    name:'Detail',
    data(){
      return{
        list:''
      }
    },
    methods: {
    onClickCart() {
      this.$router.push('#');
    },
    sorry() {
      this.$toast('暂无后续逻辑~');
    },
    onClickLeft() {
      this.$router.go(-1)
    },
  },
  mounted () {
    // let token=localStorage.getItem('token');
    // let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGJiZWE5ZGExZmViYTRlZmY5YWVjOGUiLCJpYXQiOjE1NzI1OTYzODYsImV4cCI6MTU3MjYzMjM4Nn0.qLirQCuM0cB_ADaW0XPJ-i7m3G8Ig5qK-owLGG4Ej8E";
    // console.log(this.$route.params.id);
    let uid = this.$route.params.id
    api.getDetail((this.$route.params.id))
      .then(res=>{
        // console.log(res.data)
        if(res.data==null){
          alert('数据达不到电波哦');
          this.$router.go(-1)
        }else{
          this.list=res.data;
        }
      })
  } 
}
</script>

<style scoped="">
.van-nav-bar__title,.van-icon{
    
    color: palevioletred;
}
/* 发布 */
#shuju li{
  margin-top:50px;
width: 100%;
text-align: center;
font-size:20px;
}
#shuju li img{
    width: 300px;
    height: 300px;
    border-radius: 15px;
    
}
#shuju li span{
    color: red;
}
</style>
