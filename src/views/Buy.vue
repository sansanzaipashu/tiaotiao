<template>

 <div>
 <van-nav-bar
   title="我的拼购"
   left-text=""
   left-arrow
   @click-left="onClickLeft"
   :fixed="true"
 /></div>
</template>

<script>
  export default{
    name:'buy',
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
