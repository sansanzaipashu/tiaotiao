<template>
  <div>
      
      <!-- 标题 -->
      <van-nav-bar
  title="二手书屋"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
  :fixed="true"
/>

<!-- 点击栏 -->
    <div id="dianji">
        <van-row type="flex"  justify="center">
            <van-col span="9" height="50px">
                <div id="bookSend" @click="send">
                    <!-- 发布旧书 -->
                    <img src="../assets/book1.jpg" alt="">
                </div>
            </van-col>
            <van-col span="9" align="center">
                <div id="bookRecover" @click="cover">
                    <!-- 平台回收 -->
                    <img src="../assets/book3.jpg" alt="">
                </div>
                <div id="Survey" @click="survey">
                    <!-- 问卷调查 -->
                    
                    <img src="../assets/book2.jpg" alt="">
                </div>
            </van-col>
        </van-row>
    </div>
    <!-- 下拉刷新 -->
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
    <!-- 选项 -->

    <van-tabs @click="shu">
    <van-tab v-for="index in list" :title="index" title-active-color='palevioletred' >
        
    </van-tab>
    </van-tabs>
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
import mock from "@/assets/js/mock.js";
import iscroll from "@/assets/js/iscroll.js";
import jq from "@/assets/js/jq.js";
import * as api from "../api/getProlist.js";

export default {
    name:"Book",
    data(){
        return{
            data:'',
            list:['教材教辅','畅销小说','文学文艺','学习考试','经管励志','期刊杂志'],
            isLoading: false
        }
    },
    methods: {
    onClickLeft() {
      this.$router.push('/home')
    },
    add(){
        $.each($('#list span'),(i,n)=>{
            $('#list span').eq(i).click(function(){
               $(this).addClass('add').siblings().removeClass('add') 
            })

        })
    },
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
    send(){
        this.$router.push('/bookSend')
    },
    cover(){
        this.$toast('暂未开放，敬请期待');
    },
    survey(){
        this.$router.push('/bookSurvey')
    },onRefresh() {
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
  }
}
</script>

<style scoped="">
.add{
    border-bottom: 1px solid palevioletred;
}

.van-nav-bar{
    width: 100vw;
    height: 45px;

}
.van-nav-bar__title,.van-icon{
    
    color: palevioletred;
}
#dianji{
    margin-top: 45px;
}
.van-col{
    height: 130px;
    width: 100vw;
   
}

#bookSend{
    background: pink;
    width: 100%;
    height: 100%;
    font-size: 22px;
    text-align: center;
    line-height: 130px;
    border-radius: 8px;
    /* margin-right:10px;
    margin-left:10px; */
    }
#bookSend img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

#bookRecover,#Survey{
    height: 60px;
    font-size: 16px;
    text-align: center;
    line-height: 60px;
    border-radius: 8px;
    margin-left:10px;
    /* margin-right:10px; */
    
}
#bookRecover img,#Survey img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
#bookRecover{
    background: paleturquoise
}
#Survey{
    background: burlywood;
    margin-top: 10px;
}
#list{
    overflow-x: auto!important;
    /* overflow: hidden; */
	width: 500px;
}
#list span{
    display:inline-block;
    width: 80px;
    text-align: center
}
#wrap-list{
        height: 100%;
		width: 100%;
		overflow-x: auto;
}
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

</style>