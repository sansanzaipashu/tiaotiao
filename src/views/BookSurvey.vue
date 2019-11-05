<template>
  <div>
    <!-- 标题 -->
   <van-nav-bar
    title="二手书屋用户调查问卷"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
    :fixed="true"
    />
    <div id="content">
        <p id="ti">亲爱的用户您好，为了能够为广大用户提供更加完善、优质的服务，建设更加优质、便捷的社区，劳请您协助我们完成这份问卷调查：</p>
        <p id="exp">您是否有购买二手书的经历:
            <input type="text" list="chan" placeholder="请选择">
            <datalist id="chan">
                <option v-for="item in list" :value="item"></option>  
            </datalist>
        </p>
        <p id="exp">请选择您平时购买或借阅哪类书籍较多：</p>
        <!-- <p id="exp" v-for="item in xixi">{{item}}<van-checkbox v-for="i in xixi" :v-model="i" shape="square" ></van-checkbox></p>  -->
        <p id="exp">小说<van-checkbox v-model='checkedx' shape="square" ></van-checkbox></p> 
        <p id="exp">文学<van-checkbox v-model='checkedw' shape="square" ></van-checkbox></p> 
        <p id="exp">考研<van-checkbox v-model='checkedk' shape="square" ></van-checkbox></p> 
        <p id="exp">教辅资料<van-checkbox v-model='checkedj' shape="square" ></van-checkbox></p> 
        <p id="exp">励志读物<van-checkbox v-model='checkedl' shape="square" ></van-checkbox></p> 
        <p id="exp">期刊杂志<van-checkbox v-model='checkedq' shape="square" ></van-checkbox></p> 
         <p id="exp">（可选）不选择二手书的原因:
            <input type="text" list="chan1" placeholder="请选择">
            <datalist id="chan1">
                <option v-for="item in list1" :value="item"></option>  
            </datalist>
        </p>
         <p id="exp">您一般从哪购买二手书:
            <input type="text" list="chan2" placeholder="请选择">
            <datalist id="chan2">
                <option v-for="item in list2" :value="item"></option>  
            </datalist>
        </p>
    <van-button type="primary" size="large" color="palevioletred" @click="send">提交</van-button>

    </div>
  </div>
</template>

<script>
export default {
name:'BookSurvey',
data(){
    return{
        list:['经常购买二手书','偶尔购买二手书','很少购买二手书','从未购买二手书'],
        checkedx:'',
        checkedw:'',
        checkedk:'',
        checkedj:'',
        checkedl:'',
        checkedq:'',
        xixi:['小说','文学','考研','教辅资料','励志读物','期刊杂志'],
        list1:['没有渠道购买','图书馆的书能满足了','懒得买','不习惯使用二手书','不喜欢看书','邮费太贵'],
        list2:['线上限制交易平台','线下实体书店','其他同学处']
    }
},
methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
    send(){
        this.$toast('提交成功');
        this.$router.push("/book");
    }
}
}
</script>

<style scoped="">
.van-nav-bar__title,.van-icon,.van-nav-bar__text,.van-icon,.van-icon-arrow-left,.van-nav-bar__arrow{
    font-size: 20px;
    color: #000;
    line-height: 40px;

}
#content{
    margin-top: 45px;
    padding: 5px 10px;
    font-size: 14px;
    background: #fffff2;
}
#ti{
    color: #444;
    text-indent: 32px;
}
#exp{
    height: 30px;
    line-height: 30px;
    background: white;
    /* margin: 10px 0; */
}
.van-checkbox{
    display: inline-block;
    position: absolute;
    right: 10px;
}
input{
    outline: 0;
    border: 0;
    border-bottom: 1px solid gray;
    }
.van-button,.van-button--primary,.van-button--large{
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>