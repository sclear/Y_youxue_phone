<template>
  <div class="goods">
      <div class="title">
          <bor text='精品课程'></bor>
          <div class="txt">更多></div>
      </div>
      <div class="group">
        <div class="detail">
          <div class="img"></div>
          <div class="txt">
            <div class="top-txt">24节课，实现Excel小白到高手的转变</div>
            <div class="stu-time">
              <div>222人正在学习</div>
              <div>更新于2018-12-11</div>
            </div>
          </div>
        </div>
        <hr>
        <div class="detail">
          <div class="img"></div>
          <div class="txt">
            <div class="top-txt">24节课，实现Excel小白到高手的转变</div>
            <div class="stu-time">
              <div>222人正在学习</div>
              <div>更新于2018-12-11</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
.goods{
  width:20.4375rem;
  margin:0 auto 0 auto;
  .title{
    margin-top: 1.375rem;
    .spaBtw;
    .txt{
      font-size: .6875rem;
      line-height: 1.375rem;
      color:@txt;
    }
  }
  .group{
    .detail{
      margin-top: 25px;
      height:54px;
      width:100%;
      .spaBtw;
      .img{
        height:54px;
        width:99px;
        border-radius: 5px;
        background: red;
      }
      .txt{
        width:218px;
        height:54px;
        // background: red;
        .top-txt{
          font-size: .875rem;
          color:@dtxt;
        }
        .stu-time{
          .spaBtw;
          font-size: 11px;
          color:@stxt;
        }
      }
    }
    hr{
      width:100%;
      color:@bgcol;
      margin-top: 1.375rem;
    }
  }
}
</style>
