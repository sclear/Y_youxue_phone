<template>
  <div class="col">
    <div class="w350">
      <div class="imgBox"></div>
      <div class="content">
        <div class="title">24节课，实现EXCEL小白到高手</div>
        <div class="bottom-txt">
          <span>24课时</span>
          <span>|</span>
          <span>30分钟每课时</span>
        </div>
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
.col {
  height: 5.8125rem;
  background: white;
  margin-top: .4375rem;
  .w350 {
    width: 21.875rem;
    box-sizing: border-box;
    padding: 0.1875rem 0 0.1875rem 0.6875rem;
    margin: 0 auto;
    .spaBtw;
    .imgBox {
      width: 7.5rem;
      height: 4.8125rem;
      background: bisque;
    }
    .content{
        position:relative;
    }
  }
}
.title {
  font-size: 0.9375rem;
  color: @dtxt;
  box-sizing: border-box;
//   padding-top: 15px;
}
.bottom-txt {
  position: absolute;
  font-size: 0.75rem !important;
  color: @dtxt;
  bottom: 0;
}
</style>
