<template>
  <div class="buys">
    <div class="imgBox"></div>
    <div class="content">
        <div class="title">24节课，实现EXCEL小白到高手的转变</div>
        <div class="class-time">
            <span>24课时</span>
            <span class="mar8">|</span>
            <span>30分钟每课时</span>
        </div>
        <div class="bottom-txt">
            <span>下单时间：2018-11-11</span>
            <span class="money">实付款：￥689</span>
        </div>
    </div>
    <div class="handle">
      <span v-if="show===0">购买成功</span>
      <span v-if="show===1">已取消</span>
      <span v-if="show===2">立即评论</span>
      <span v-if="show===3">待付款</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 0
    };
  },
  components: {}
};
</script>

<style lang='less' scoped >
.buys {
  background: white;
  height: 5rem;
  width: 350px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.6875rem 0 0 0.5rem;
  .spaBtw;
  .imgBox {
    height: 3.125rem;
    width: 4.1875rem;
    background: red;
  }
  .content {
    width: 13.0625rem;
    height: 3.125rem;
    .title{
        font-size: .75rem;
        color:@dtxt;
    }
    .class-time{
        font-size: .625rem;
        color:@dtxt;
    }
    .bottom-txt{
        color:@dtxt;
        font-size: .625rem;
        margin-top: .25rem;
        position:relative;
        .money{
            position: absolute;
            left:7.5rem;
        }
    }
  }
  .handle{
      line-height: 3.75rem;
      font-size: .625rem;
      color:@red;
  }
}
.mar8{
    margin: 0 .5rem;
}
</style>
