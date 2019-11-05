<template>

 <div>
 <van-nav-bar
   title="我的发布"
   left-text=""
   left-arrow
   @click-left="onClickLeft"
   :fixed="true"
 />
 </div>
</template>

<script>
  export default{
    name:'push',
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
