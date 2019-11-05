<template>
  <div>
      <!-- 标题 -->
        <van-nav-bar
        title="生活助手"
        left-arrow
        @click-left="onClickLeft"
        :fixed="true"
        />
         <!-- 下拉刷新 -->
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
        <!-- 数据 -->
      <ul id="shuju" v-model="isLoading" @refresh="onRefresh" :disabled="true">
            <li v-for="item in data" @click="detail(item._id)">
                <img :src="item.coverImg" alt="">
                <p id="titel">{{item.descriptions}}</p>
                <span>{{item.price}}元</span>
                
                
            </li>
        </ul>
        </van-pull-refresh>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
// import css from "@/assets/css/shuju.css";
export default {
name:'Life',
data(){
  return{
    data:'',
    isLoading: false,
  }
},
methods: {
    onClickLeft() {
    //   this.$toast('返回');
      this.$router.go(-1);
    },
     detail(id){
        this.$router.push('/detail/'+id)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        let n=Math.floor(Math.random()*10)+1;
        let i=Math.floor(Math.random()*35)+15;
        api.getBook({
            per:i,
            page:n
        }).then((data)=>{
            //   console.log(data.data.products);
            this.data=data.data.products;
        })
      }, 500);
    }
  },
  mounted(){
      let n=Math.floor(Math.random()*10)+1;
      let i=Math.floor(Math.random()*35)+15;
      api.getBook({
        per:i,
        page:n
      }).then((data)=>{
          // console.log(data.data.products);
          this.data=data.data.products;
      })
  }
}
</script>

<style scoped="">
.van-nav-bar__title,.van-icon{
    
    color: palevioletred;
}
/* 发布 */
#shuju li{
    width: 50%;
    height: 230px;
    float: left;
    text-align: center;
    margin-bottom:5px;
    }
    #shuju{
      margin-bottom:80px;
    }
    #shuju li img{
        width: 150px;
        height: 150px;
        border-radius: 8px;
    }
    #shuju li #titel{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      }
    #shuju li span{
        color: red;
    }
    .van-pull-refresh{

    }
</style>