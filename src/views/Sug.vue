<template>
  <div>
    <van-nav-bar
      title="意见反馈"
      left-text=""
      left-arrow
      @click-left="onClickLeft"

    />
    <div class="kuang">
      您对此软件的界面UI的满意程度：<van-rate v-model="value"  void-color="red"/>
     <van-cell-group>
       <van-field
       class="inp"
         v-model="message"
         rows="2"
         autosize
         type="textarea"
         maxlength="100"
         placeholder="您对此软件的界面UI的满意程度"
         show-word-limit
       />
     </van-cell-group>
   </div>
   <div class="kuang">
      您对此软件的功能的满意程度：<van-rate v-model="value1"  void-color="red"/>
     <van-cell-group>
       <van-field
       class="inp"
         v-model="message1"
         rows="2"
         autosize
         type="textarea"
         maxlength="100"
         placeholder="您对此软件的功能的满意程度"
         show-word-limit
       />
     </van-cell-group>
   </div>
   <div class="kuang">
      您对此软件的客户服务的满意程度：<van-rate v-model="value2"  void-color="red"/>
     <van-cell-group>
       <van-field
       class="inp"
         v-model="message2"
         rows="2"
         autosize
         type="textarea"
         maxlength="100"
         placeholder="您对此软件的客户服务的满意程度"
         show-word-limit
       />
     </van-cell-group>
   </div>
<input type="submit" @click="da()"/>
  </div>
</template>

<script>
  export default {
    name:"sug",
    methods:{
      onClickLeft() {
        this.$router.go(-1)
      },
     da(){
       alert("感谢您的评价")
     }
    },
    data() {
      return {
        value: 0,value1: 0,value2: 0,
        message:'',message1:'',message2:'',
      };
    },

  }
</script>

<style scoped="">
.kuang{
  margin-top: 20px;
  font-size: 16px;
}
.inp{
  margin-top: 10px;
}
</style>
