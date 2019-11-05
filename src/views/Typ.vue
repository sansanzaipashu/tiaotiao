<template>
<div id="app">
    <!-- 标题 -->
<van-nav-bar
  left-text="类别"
/>
<!-- 标签卡 -->
<van-tabs  @click="shu" id="yi"  title-active-color='palevioletred'>
  <van-tab v-for="index in list" :title="index">
  </van-tab>
</van-tabs>
<van-tabs @click="shu" id="er"  title-active-color='bisque' title-inactive-color="#999">
  <van-tab v-for="index in list" :title="index">
  </van-tab>
</van-tabs>
<!-- 下拉刷新 -->
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
<!-- 数据 -->
    <ul id="shuju">
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
import jq from "@/assets/js/jq.js";
import * as api from "../api/getProlist.js";
// var scroll=document.documentElement.scrollTop
export default {
    
name:'Typ',
data(){
    return{
        scroll:'',
        data:'',
        list:['全部','数码','美妆','图书','体育','生活','文具','食品','游戏','箱包','服饰','交通'],
        isLoading:false
    }
},methods: {
    shu(){
        let n=Math.floor(Math.random()*10)+1;
        let i=Math.floor(Math.random()*35)+15;
        api.getBook({
        per:i,
        page:n
        }).then((data)=>{
            // console.log(data.data.products);
            this.data=data.data.products;
        })
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
        //   console.log(data.data.products);
          this.data=data.data.products;
      })
      var scroll=document.documentElement.scrollTop;
      var _this =this
        window.addEventListener('scroll',function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop<100){
    
            $("#yi").css("display","block");
            $("#er").css("display","none");
        }else if(scrollTop>220){
           
            $("#yi").css("display","none");
            $("#er").css("display","block");
        }
        })
  }


}
</script>

<style scoped="">
#app{
    margin-bottom:50px; 
}
.van-nav-bar__text{
    font-size: 20px;
    color:palevioletred;
}

/* 数据 */
#shuju li{
width: 50%;
height: 230px;
float: left;
text-align: center;
}
#shuju li #titel{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
#shuju li img{
    width: 150px;
    height: 150px;
    border-radius: 8px;
}
#shuju li span{
    color: red;
}

/* 选项卡悬浮 */
#er{
    position:fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 2;
    border:peachpuff 1px solid;
}
</style>