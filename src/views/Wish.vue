<template>

 <div>
 <van-nav-bar
   title="我的许愿"
   left-text=""
   left-arrow
   @click-left="onClickLeft"
   :fixed="true"
 />
 </div>
</template>

<script>
  export default{
    name:'wish',
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
