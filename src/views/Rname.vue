<template>
  <div>
      <!-- 标题 -->
        <van-nav-bar
        left-text="实名认证"
        left-arrow
        @click-left="onClickLeft"
        :fixed="true"
        />
        <div id="content">
            <!-- 上传文件图片 -->
            <van-uploader >
                <van-button icon="manager">上传学生卡或者身份证的正面照片</van-button>
            </van-uploader>
            <div id="price">
                姓名：<input type="text"><br>
                学号：<input type="text">
            </div>
            <van-button type="primary" color="palevioletred" size="normal"  @click="send">提交</van-button>
        </div>
        

  </div>
</template>

<script>
export default {
name:'Rname',
data(){
    return{
        fileList: []
    }
    
},
 methods: {
    onClickLeft() {
    //   this.$toast('返回');
      this.$router.go(-1);
    },
    send(){
        this.$toast('提交成功');
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
    text-align: center;
}

.van-button--normal:first-child{
    width: 300px;
    height: 200px;
    text-align: center;
    display: block;
    
}
.van-image ,.van-uploader__preview-image{
    position: absolute;
    top: 20px;
    left: 50px;
}
#price{
    margin-top: 20px;
    margin-bottom: 20px;
    }
#price input{
    outline: none;
    border: 0;
    border-bottom: #333 solid 1px;
    width: 150px;
    margin-top: 20px;
}

</style>