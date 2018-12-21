<template>
  <div>
    <div class="refer">
      <bor text="推荐课程"></bor>
      <div class="exchange">换一批</div>
    </div>
    <div class="group">
        <div>
            <div class="img"></div>
            <div class="txt">快速记忆单词</div>
        </div>
        <div>
            <div class="img"></div>
            <div class="txt">快速记忆单词</div>
        </div>
        <div>
            <div class="img"></div>
            <div class="txt">快速记忆单词</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped >
.refer {
  width: 20.4375rem;
  margin: 14px auto 0 auto;
  display: flex;
  justify-content: space-between;
  .exchange {
    color: @main;
    font-size: 0.6875rem;
    line-height: 1.375rem;
  }
}
.group{
    width: 20.4375rem;
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: space-between;
    &>div{
        height:173px;
        width:99px;
        .img{
            height:151px;
            width:6.1875rem;
            border-radius: 5px;
            background: red;
        }
        .txt{
            font-size: .875rem;
            color:@dtxt;
            text-align: center;
            margin-top: 3px;
        }
    }
}
</style>
