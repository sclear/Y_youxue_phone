<template>
  <div class="good">
    <back text='精品课件'></back>
    <div class="logo"></div>
    <div class="sale"></div>
    <like-hr></like-hr>
    <div class="group">
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="detail">
        <div class="img"></div>
        <div class="txt">英语口语</div>
      </div>
      <div class="nullbox"></div>
      <div class="nullbox"></div>
      <div class="nullbox"></div>
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
.good {
  width: 100%;
}
.logo {
  width: 328px;
  height: 148px;
  margin: 0 auto;
  background: bisque;
}
.sale {
  width: 328px;
  height: 81px;
  background: bisque;
  margin: 1.25rem auto 0.75rem auto;
}
.group {
  width: 328px;
  margin: 0 auto;
  .spaBtw;
  flex-wrap: wrap;
  .detail {
    width: 103px;
    height: 87px;
    margin-top: 21px;
    .img {
      width: 103px;
      height: 69px;
      border-radius: 5px;
      background: bisque;
    }
    .txt{
        color:@dtxt;
        text-align:center;
        margin-top: 7px;
        font-size: .0625rem;
    }
  }
  .nullbox{
     width:103px;
     height:1px;
  }
}
</style>
