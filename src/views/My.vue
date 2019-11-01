<template>
  <div>
     <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>
    <van-cell-group>
      <van-cell icon="points" title="我已发布" is-link />
      <van-cell icon="gold-coin-o" title="我已卖出" is-link />
      <van-cell icon="gift-o" title="我已许愿" is-link />
      <van-cell icon="gift-o" title="我的包裹" is-link />
      <van-cell icon="gift-o" title="我的拼购" is-link />
      <van-cell icon="gift-o" title="意见反馈" is-link />
      <van-cell icon="gift-o" title="分享软件" is-link />
    </van-cell-group>
  </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
name:"My",
components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
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

</style>