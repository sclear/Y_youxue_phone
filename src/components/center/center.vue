<template>
  <div class="center">
    <back text="个人中心"></back>
    <like-hr></like-hr>
    <div class="backWhite">
      <div class="headImg">
        <img src="./../../assets/tx.png" alt>
      </div>
      <div class="user">5646548656</div>
    </div>
    <like-hr class=""></like-hr>
    <div class="menu">
        <div @click.stop="toRoute(0)" class="menu-child">
            <span>icon</span> <span>测评</span>
        </div>
    </div>
    <div class="menu">
        <div @click.stop="toRoute(1)" class="menu-child">
            <span>icon</span> <span>课程管理</span>
        </div>
    </div>
    <div  class="menu">
        <div @click.stop="toRoute(2)" class="menu-child">
            <span>icon</span> <span>订单管理</span>
        </div>
    </div>
    <div  class="menu">
        <div @click.stop="toRoute(3)" class="menu-child">
            <span>icon</span> <span>我的收藏</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      toRoute(res) {
        //   console.log(res)
        //   return
          switch(res) {
              case 0:this.$router.push('/evals');break;
              case 1:this.$router.push('/course');break;
              case 2:this.$router.push('/order');break;
              case 3:this.$router.push('/collect');break;
          }
          
      }
  },
  components: {}
};
</script>

<style lang='less' scoped >
.center {
  background: @bgcol;
  height: 100vh;
  .backWhite{
      background: white;
      box-sizing: border-box;
      padding:1.0625rem 0 1.3125rem 0;
  }
  .menu{
      width:100%;
      height:2.8125rem;
      margin-bottom: 1px;
      background: white;
      .menu-child{
          width:20.5rem;
          margin:0 auto;
          span{
              line-height: 45px;
          }
          span:last-child{
              margin-left: 18px;
              color:@txt;
          }
      }
  }
}
.headImg {
  width: 4.4375rem;
  height: 4.4375rem;
  border-radius: 50%;
  background: red;
  margin: 0 auto;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    background: white;
  }
}
.user {
  margin: 1.3125rem auto 0 auto;
  text-align: center;
  color: @main;
}
</style>
