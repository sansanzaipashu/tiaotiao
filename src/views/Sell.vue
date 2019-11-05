<template>

 <div>
 <van-nav-bar
   title="已卖出"
   left-text=""
   left-arrow
   @click-left="onClickLeft"
   :fixed="true"
 />
 </div>
</template>

<script>
  export default{
    name:'mall',
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
