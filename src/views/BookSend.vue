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
        label="书籍名称"
        type="textarea"
        maxlength="30"
        placeholder="请输入名称"
        show-word-limit
    />
    </van-cell-group>
    <!-- 描述 -->
    <van-cell-group>
    <van-field
        v-model="message"
        rows="2"
        autosize
        label="描述"
        type="textarea"
        maxlength="100"
        placeholder="请输入描述"
        show-word-limit
    />
    </van-cell-group>
    <!-- 单选框 -->
    <van-checkbox v-model="checked" shape="square">全新宝贝</van-checkbox>
    <div id="price">
        原价：<input type="text">
        卖价：<input type="text">
    </div>
    <!-- 多选 -->
    宝贝类别*：
    <input type="text" list="chan" placeholder="选择宝贝类别">
    <datalist id="chan">
        <option v-for="item in list" :value="item"></option>  
    </datalist>
    <p>注：在这里发布的书籍也会显示在主页。</p>
    <van-button type="primary" size="large" color="palevioletred" @click="send">立即发布</van-button>
</div>

  </div>
</template>

<script>
export default {
name:'BookSend',
 data() {
    return {
      fileList: [],
      message:"",
      checked:'false',
      list:['教材教辅','畅销小说','文学文艺','学习考试','经管励志','期刊杂志']
    }
  },
 methods: {
    onClickLeft() {
    //   this.$toast('返回');
      this.$router.go(-1);
    },
    send(){
        this.$toast('发布成功');
        this.$router.push("/book");
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