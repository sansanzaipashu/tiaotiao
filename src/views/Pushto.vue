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
            <p>*请在上方添加闲置图片,请注意图片大小</p>
            <!-- 名字 -->
            <van-cell-group>
            <van-field
                id="name"
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
            <!-- 描述 -->
            <van-cell-group>
            <van-field
                v-model="message1"
                rows="2"
                autosize
                label="宝贝描述"
                type="textarea"
                maxlength="100"
                placeholder="描述一下您的宝贝的规格尺寸，新旧程度等"
                show-word-limit
            />
            </van-cell-group>
            <!-- 单选框 -->
            <van-checkbox v-model="checked" shape="square">全新宝贝</van-checkbox>
            <div id="price">
                原价（可选）：<input type="text" v-model="yuan">
                卖价*：<input type="text" v-model="prices">
            </div>
            <!-- 多选 -->
            宝贝类别*：
            <input type="text" list="chan" placeholder="选择宝贝类别">
            <datalist id="chan">
                <option v-for="item in list" :value="item"></option>  
            </datalist>
            <van-button type="primary" size="large" color="palevioletred" @click="send">立即发布</van-button>
        </div>
  </div>
</template>

<script>
import jq from "@/assets/js/jq.js";
import * as api from "../api/getProlist.js";
export default {
name:'Pushto',
data() {
    return {
      fileList: [],
      message:"",
      yuan:'',
      prices:'',
      message1:"",
      checked:'false',
      list:['数码','美妆','图书','体育','生活','文具','食品','游戏','箱包','服饰','交通']
    }
  },
 methods: {
    onClickLeft() {
    //   this.$toast('返回');
      this.$router.go(-1);
    },
    send(){
        let name=this.message;
        let descriptions=this.message1;
        let quantity=10;
        let prices=$('#price input').eq(1).val();
        let coverImg=this.fileList[0].content;
        let productCategory='5d63de18b91b9569e466eacf';
        // let token=localStorage.getItem('token')
        let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDgwMjliNTZkZDZkZTA5ZTliMjk3OTkiLCJpYXQiOjE1NzI5MjE5NDIsImV4cCI6MTU3Mjk1Nzk0Mn0.5udkT-HcEosZrlKJ-vIfsiMMQ86w3LfrfjeM4A2R94k';
        console.log(prices)
        api.pushTo({
            name:name, 
            descriptions:descriptions,
            quantity:quantity,
            price:prices,
            coverImg:coverImg,
            productCategory:productCategory
        },{"authorization":"Bearer "+token}).then((data)=>{
            console.log(data);
            if(data.statusText=='OK'){
                this.$toast('发布成功');
                this.$router.go(-1);
            }else{
                this.$toast('发布失败');
            }
        })

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
    width: 70px;
}
.van-button,.van-button--primary,.van-button--large{
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>