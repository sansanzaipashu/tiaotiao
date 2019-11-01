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
      <!-- 点击按钮 -->
      <!-- <ul id="list">
          <li><a><van-icon size="45" color="" name="chat" @click="tip()"/>二手书籍</a></li>
          <li><a><van-icon size="45" color="" name="chat" />代取快递</a></li>
          <li><a><van-icon size="45" color="" name="chat" />拼团团股</a></li>
          <li><a><van-icon size="45" color="" name="chat" />愿望广场</a></li>
          <li><a><van-icon size="45" color="" name="chat" />生活用品</a></li>
          <li><a><van-icon size="45" color="" name="chat" />美味食品</a></li>
          <li><a><van-icon size="45" color="" name="chat" />服饰箱包</a></li>
          <li><a><van-icon size="45" color="" name="chat" />二手美妆</a></li>
        
      </ul> -->
      <van-grid square>
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="chat"
        text='二手书籍'
        to="/book"
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='代取快递'
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='拼团团股'
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='愿望广场'
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='生活用品'
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='美味食品'
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='服饰箱包'
      />
      <van-grid-item
        v-for="value in 1"
        :key="value"
        icon="photo-o"
        text='二手美妆'
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
            实名认证
          </div>
        </van-col>
        <van-col  span="8" >
          <div id="ping">
            平台规则
          </div>

        </van-col>
      </van-row>
      <!-- 最新发布 -->
  <h5 id="xin"><span></span><span>最新发布</span> </h5>
  <ul id="shuju">
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
        data:''
      }
    },
    methods:{
      // tip(){
      //   this.$router.push('./book')
      // }
      detail(id){
        this.$router.push('/detail/'+id)
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
  }
}
</script>

<style scoped="">

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
}
#shuju li img{
    width: 150px;
    height: 150px;
    border-radius: 8px;
}
#shuju li #titel{
  width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  }
#shuju li span{
    color: red;
}

</style>