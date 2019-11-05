<template>
  <div>
       <!-- 标题 -->
        <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        :fixed="true"
        />
         <div id="content">
            <!-- 上传图片 -->
            <van-uploader
            v-model="fileList"
            multiple
            :max-count="3"
            />
            <p>*请在上方添加闲置图片</p>
            <!-- 名字 -->
            <van-cell-group>
            <van-field
                v-model="message"
                rows="2"
                autosize
                label="宝贝名称"
                type="textarea"
                maxlength="30"
                placeholder="请输入名称"
                show-word-limit
            />
            </van-cell-group>
             <div id="price">
               截止日期：<input type="text" placeholder="请选择截止日期">
            </div>
            <van-datetime-picker
                v-model="currentDate"
                type="date"
               confirm
                />
            <van-button type="primary" size="large" color="palevioletred" @click="send">立即发布</van-button> <van-button type="primary" size="large" color="palevioletred" @click="send">立即发布</van-button>
         </div>
  </div>
</template>

<script>
export default {
name:'Buyto',
data() {
    return {
      fileList: [],
      message:"",
       currentDate: new Date(),
    }
  },
 methods: {
    onClickLeft() {
    //   this.$toast('返回');
      this.$router.go(-1);
    },
    send(){
        this.$toast('发布成功');
        this.$router.go(-1);
        // this.$router.push("/home");
    }
  }
}
</script>

<style scoped="">
.van-nav-bar__title,.van-icon,.van-nav-bar__text{
    font-size: 20px;
    color: #000;
    line-height: 40px;
}
#content{
    font-size: 16px;
    margin: 60px 0 0 10px;
}
/* 文件上传 */
.van-uploader__wrapper{
    margin-top: 10px;
}
#price{
    margin-top: 20px;
    margin-bottom: 20px;
    }
#price input{
    outline: none;
    border: 0;
    border-bottom: #333 solid 1px;
    width: 120px;
}
.van-button,.van-button--primary,.van-button--large{
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>