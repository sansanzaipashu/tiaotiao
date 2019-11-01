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
                <div id="bookSend">
                    <!-- 发布旧书 -->
                    <img src="../assets/book1.jpg" alt="">
                </div>
            </van-col>
            <van-col span="9" align="center">
                <div id="bookRecover">
                    <!-- 平台回收 -->
                    <img src="../assets/book3.jpg" alt="">
                </div>
                <div id="Survey">
                    <!-- 问卷调查 -->
                    
                    <img src="../assets/book2.jpg" alt="">
                </div>
            </van-col>
        </van-row>
    </div>
    <!-- 选项 -->
    <nav id="wrap-list">
		<p id="list" @click="add" >
			<span class="add" @click="shu">教材教辅</span>
			<span @click="shu">畅销小说</span>
			<span @click="shu">文学文艺</span>
			<span @click="shu">学习考试</span>
			<span @click="shu">经管励志</span>
			<span @click="shu">期刊杂志</span>
            <!-- <van-col span="5">教材教辅</van-col>
            <van-col span="5">畅销小说</van-col>
            <van-col span="5">文学文艺</van-col>
            <van-col span="5">学习考试</van-col>
            <van-col span="5">经管励志</van-col>
            <van-col span="5"></van-col> -->
		</p>
	</nav>
    <!-- 数据 -->
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
import mock from "@/assets/js/mock.js";
import iscroll from "@/assets/js/iscroll.js";
import jq from "@/assets/js/jq.js";
import * as api from "../api/getProlist.js";

export default {
    name:"Book",
    data(){
        return{
            data:''
        }
    },
    methods: {
    onClickLeft() {
      this.$router.go(-1)
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
  white-space: normal;
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