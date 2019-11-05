<template>
  <div id="app">
      <!-- 标题 -->
        <van-nav-bar
        title="平台规则"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 标签卡 --> 
        <van-tabs :ellipsis="false" title-active-color="palevioletred">
        <van-tab v-for="index in list" :title="index.tetel" 	>
            <!-- 内容 {{ index.img }} -->
            <img :src="index.img">
            <!-- <img src='../assets/roul-6.png'> -->
        </van-tab>
        </van-tabs>
  </div>
</template>

<script>
export default {
name:'Roul',
data(){
    return{
        // list:['消息推送规则','用户行为规则','商品发布规则','快递代取规则','如何举报用户','用户处罚规则'],
        list:[
            {
                tetel:'消息推送规则',
                img:'/static/img/roul-1.1d4e104.png'
            },{
                tetel:'用户行为规则',
                img:'/static/img/roul-2.4959db8.png'
            },{
                tetel:'商品发布规则',
                img:'/static/img/roul-3.84e7d48.png'
            },{
                tetel:'快递代取规则',
                img:'/static/img/roul-4.d742c8c.png'
            },{
                tetel:'如何举报用户',
                img:'/static/img/roul-5.73f8810.png'
            },{
                tetel:'用户处罚规则',
                img:'/static/img/roul-6.b9a806a.png'
            },
        ],
    }
},
methods: {
    onClickLeft() {
    //   this.$toast('返回');
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped="">
.van-nav-bar__title,.van-icon{
    
    color: palevioletred;
}
.van-tab .van-ellipsis{
    display: inline-block;
    width: 100px;
}
van-tab__pane img{
    width: 100%;
    height: 100%;
}
.van-tabs__content,.van-tab__pane{
    width: 100vw;
    height: 100%;
}
#app{
    text-align: center;
}
</style>