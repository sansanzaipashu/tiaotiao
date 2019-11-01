<template>
  <div>
    <div id="container">
      <router-view></router-view>
    </div>
    
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
       active: 0
      }
    }
    

}
</script>

<style scoped="">
</style>