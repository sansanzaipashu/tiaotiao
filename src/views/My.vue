<template>
  <div id="app">
     <div>
    <img class="user-poster" src="http://pic27.nipic.com/20130313/9252150_092049419327_2.jpg">
       <div class="tou" >
         <div class="touxiang"></div>
         <p>{{name}}</p>
         <span>编辑资料</span>

       </div>

    </van-row>
    <van-cell-group>
      <van-cell @click="fabu()" icon="points" title="我已发布" is-link />
      <van-cell  @click="sell()" icon="gold-coin-o" title="我已卖出" is-link />
      <van-cell @click="wish()" icon="gift-o" title="我已许愿" is-link />
      <van-cell @click="mall()" icon="points" title="我的包裹" is-link />
      <van-cell @click="buy()"icon="gold-coin-o" title="我的拼购" is-link />
      <van-cell @click="sug()" icon="gift-o" title="意见反馈" is-link />
      <van-cell v-on:click="show = !show"  icon="points" title="分享软件" is-link />
      <share class="share" :config="config" v-if="show"></share>
    </van-cell-group>
  </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
 import * as api from '../api/lg.js'
export default {
name:"My",
components: {
    [Row.name]: Row,
    [Col.name]: Col-8/85,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data(){
    // show:false,
    return{
      name:'',
      show:false,
      config:{
      source:'', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
      sites: ['qzone', 'weibo','wechat', ], // 启用的站点
      }
    }
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
    fabu(){
       this.$router.push('/push')
    },
    sell(){
       this.$router.push('/sell')
    },
    wish(){
       this.$router.push('/wish')
    },
    mall(){
       this.$router.push('/mall')
    },
    buy(){
       this.$router.push('/buy')
    },
    sug(){
       this.$router.push('/sug')
    },

  },
  mounted() {
      api.getUser().then((data) => {
        this.data=data.data
          console.log(this.data)
          this.name = this.data.userName
        })

  }
}
</script>



<style scoped="">

  .user-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  .user-group {
    margin-bottom: 15px;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

  }
  .user-links .van-icon {
      display: block;
      font-size: 24px;
    }
.tou{

  display: flex;
  justify-content: space-between;
}
.touxiang{
  width: 50px;
  height: 50px;
  background: #000000;
  border-radius: 50% ;
  justify-content: space-between;
}
.tou span{
  width:60px;
  height: 20px;
  background: #0000FF;
}
.tou p{
  width: 80px;
  height: 30px;
  background: #666;
  /* margin: 0; */
  margin-right: 100px;
}
.share{
  margin-left: 20px;
}
</style>
