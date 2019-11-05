<template>
  <div id="app">
    <!-- 内容 -->
    <div id="container">
      <router-view></router-view>
      <span id="xuanfu"><van-icon name="plus" size='30' color='orange' @click="showPopup"/></span>
      <van-popup v-model="show" :overlay-style="{color:'pink'}" closeable close-icon-position="top-right">
        <div id="anniu">
          <div id="anniut">
            <van-button round type="info" color="green" to="/pushto">发布宝贝</van-button>
            <van-button round type="info" color="blue" to="/Wishto">许愿求购</van-button>
          </div>
          <div id="anniub">
            <van-button round type="info" color="pink" to="/Mallto">快递代领</van-button>
            <van-button round type="info" color="yellow" to="/Buyto">发起拼购</van-button>
          </div>
        </div>
      </van-popup>
    </div>
    
    <!-- 底部 -->
    <van-tabbar v-model="active" :fixed="true" active-color="palevioletred" >
      <van-tabbar-item icon="home-o" to="/home"></van-tabbar-item>
      <van-tabbar-item icon="ellipsis" to="/typ"></van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/message"></van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'Index',
    data(){
      return{
       active: 0,
       show: false
      }
    },
    methods:{
      showPopup(){
         this.show = true;
      }
    }
    

}
</script>

<style scoped="">
*{margin: 0;
padding: 0;}
 #container{
    margin-bottom: 50px;

  }
  #app{
    margin-bottom: 50px;

  }
  html{
    padding-bottom: 50px;
  }
  #xuanfu{
    position:fixed;
    right:20px;
    bottom:70px;
    z-index: 3;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: orangered;
    text-align: center;
    line-height: 70px;
  }
  /* 蒙版 */
  .van-popup, .van-popup--center{
    width: 100%;
    height: 100%;
    text-align: center
  }
  #anniu button{
    width: 90px;
    height: 40px;
  }
  #anniu{
    width: 240px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top:0;
    margin: auto;
  }
  #anniut,#anniub{
    display: flex;
    width: 100%;
    justify-content: space-between;

  }

</style>