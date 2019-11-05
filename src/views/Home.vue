<template>
  <div id="app">
      <!-- 搜索框 -->
      <van-search placeholder="请输入搜索关键词" v-model="value" :fixed="true"/>
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="pink" :width="355" :height="120" :touchable="true">
        <van-swipe-item><img src="../assets/swiper1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/swiper2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/swiper3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../assets/swiper4.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <van-grid square>
        <!-- 选项 -->
      <van-grid-item
        v-for="(item,index) in nav_item"
        :key="index"
        :icon="item.icon"
        :text='item.title'
        :to="item.goto"
      />
    </van-grid>
      <!-- 小广播 -->
      <van-notice-bar color="black"
        text="通知内容"
        left-icon="volume-o"
        />

      <!-- 新用户 -->
      <h5 id="xin"><span></span><span>新用户认证</span> </h5>
      <van-row  type="flex"  justify="center">
        <van-col  span="8" >
          <div id="shi">
            <!-- 实名认证 -->
            <img src="../assets/shiming.png" alt="" @click="rname">
          </div>
        </van-col>
        <van-col  span="8" >
          <div id="ping">
            <!-- 平台规则 -->
            <img src="../assets/guize.png" alt="" @click="roul">
          </div>

        </van-col>
      </van-row>
      <!-- 最新发布 -->
  <h5 id="xin"><span></span><span>最新发布</span> </h5>
  <!-- 数据 -->
  <ul id="shuju" v-model="isLoading" @refresh="onRefresh" :disabled="true">
        <li v-for="item in data" @click="detail(item._id)">
            <img :src="item.coverImg" alt="">
            <p id="titel">{{item.descriptions}}</p>
            <span>{{item.price}}元</span>
            
            
        </li>
    </ul>
  
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
export default {
  
name:'Home',
    data(){
      return{
        value:"",
        title:"首页",
        data:'',
        isLoading: false,
        nav_item:[{
          title:"二手书籍",
          icon:"chat",
          goto:"/book",
          color:"pink"
        },{
          title:"代取快递",
          icon:"smile",
          goto:"mall"
        },{
          title:"拼购团购",
          icon:"bag",
          goto:"/buy"
        },{
          title:"愿望广场",
          icon:"star",
          goto:"/wish"
        },{
          title:"生活用品",
          icon:"shop-collect",
          goto:"/life"
        },{
          title:"美味食品",
          icon:"thumb-circle",
          goto:"/foot"
        },{
          title:"服饰箱包",
          icon:"invition",
          goto:"/look"
        },{
          title:"二手美妆",
          icon:"like",
          goto:"/beauty"
        }]
      }
    },
    methods:{
      // tip(){
      //   this.$router.push('./book')
      // }
      detail(id){
        this.$router.push('/detail/'+id)
    },
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    rname(){
      this.$router.push("/rname")
    },
    roul(){
      this.$router.push("/roul")
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
html{
  margin-bottom: 45px;
}
    #container{
    margin-bottom: 50px;
  }
  .van-swipe{
      text-align: center;
      margin: 10px 10px;
  }
  .van-swipe img{
      width: 100%;
      height: 100%;
      border-radius: 10px 10px;
  }
.van-search .van-cell{
      border-radius:50%;
  }
  #list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
  }
  #list li{
        width: 90px;
        height:90px;
        /* border: solid 1px red; */
        background: #fff;
        box-sizing: border-box;
  }
  #list li a{
      display: block;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  /* 广播 */
  .van-notice-bar{
    text-align: center;
  }
  /* 新用户 */
 #xin{
   height: 20px;
   position: relative;
 }
  #xin span:first-child{
    display:inline-block;
    width:10px;
    height:20px;
    line-height: 20px;
    background:pink;
    position: absolute;
  }
  #xin span:last-child{
    display: inline-block;
     height: 20px;
     line-height: 20px;
     position: absolute;
     left: 15px;
  }
  #shi,#ping{
    width: 100%;
    height: 100%;
    background: pink;
    width: 100%;
    height: 100%;
    font-size: 22px;
    text-align: center;
    line-height: 110px;
    border-radius: 8px;
  }
  #ping img ,#shi img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .van-col{
    height: 110px;
    width: 100vw;
   
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

</style>