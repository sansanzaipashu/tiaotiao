<template>
  <div class="a">
    <span class="txt">LOGIN</span>
    <div class="ku">
      <p class="aa">
        <van-icon name="manager" />账号：<input type="text" v-model="tap" /></p>
      <!-- 密码输入框 -->
      <div class="mima">
        <van-icon name="lock" size="20px" />密码：<input ref="passWord" type="password" v-model="passWord" v-show="!showPass" />
        <input ref="passWord" type="text" v-model="passWord" v-show="showPass" />
        <div @click="showPass = ! showPass" class="dis">
          <span v-show="showPass">
            <van-icon name="browsing-history" /></span>
          <span v-show="!showPass">
            <van-icon name="browsing-history" /></span>
        </div>
      </div>
      <div class="forfet">
        <button @click="denglu">登录</button>
        <br>
        <p class="zz"> 没有账号？<a @click="register()">立即注册</a></p>
      </div>


    </div>
  </div>
</template>

<script>
  import * as api from '../api/lg.js'

  import {
    mapMutations
  } from 'vuex';
  import {
    mapState
  } from 'vuex';
  export default {

    name: 'login',
    data() {
      return {
        tap: '',
        passWord: null,
        showPass: false,

      }
    },
    methods: {
      ...mapMutations(['changeLogin']),
      thLoadding() {
        var vm = this;
        //获取密码
        vm.passWord = vm.$refs.passWord.currentValue
      },
      register() {
        this.$router.push('/register')
      },
      denglu() {
        let username = this.tap;
        let passWord = this.passWord;
        api.DENGLU({
          userName: username,
          password: passWord,
        }).then((data) => {
          console.log(data.data.token)
          this.token = 'Bearer ' + data.data.token
          // console.log(this.token)
          this.changeLogin({
            Authorization: this.token
          });
          if(data.data.token==undefined){
            alert("登录失败")
          }else{this.$router.push('/home');
          alert('登陆成功');}


        })
      }
    }
  }
</script>

<style scoped="">
  .a {
    background: pink;
    height: 100vh;

  }

  .aa {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #666;
    margin-top: 15px;
    padding-left: 10px;
  }

  .ku {
    width: 300px;
    height: 200px;
    background: white;
    border-radius: 25px;
    position: absolute;
    left: 35px;
    top: 200px;
  }

  input {
    border: none;
  }

  .mima {
    display: flex;
    border-bottom: 1px solid #666;
    margin-top: 30px;
  }

  .txt {
    color: #fff;
    font-size: 40px;
    margin-left: 120px;

  }

  button {
    width: 100px;
    height: 40px;
    background: orange;
    border: none;
    border-radius: 15px;
    margin-left: 85px;
    margin-top: 20px;

  }

  a {
    color: red;
  }

  .zz {
    margin-left: 130px;
  }
</style>
