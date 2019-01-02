<template>
  <div class="test">
    <transition name="modeshade">
      <div v-if="show" class="shade"></div>
    </transition>

    <transition name="tras">
      <div v-if="show" class="tests centers">
        <div class="title">选择你要学习的课程分类</div>
        <hr>
        <div class="groupClass">
          <div class="class-detail chose">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="class-detail">小初课程</div>
          <div class="nullbox"></div>
          <div class="nullbox"></div>
        </div>
        <hr class="hr">
        <div class="btngourp">
          <div @click=" $emit('showclose') " class="fail">取消</div>
          <div class="next">确认</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//选择分类
export default {
  props: {
    show:{
      type:Boolean,
      required:false,
      default:false
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped >
.test {
  .shade {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.27);
  }
  .tests {
    margin: 0 auto;
    padding: 14px 0 15px 0;
    width: 20.5625rem;
    background: white;
    position: absolute;
    left: 50%;
    margin-left: -10.28125rem;
    top: 1.1875rem;
    z-index: 50;
    .title {
      text-align: center;
      color: @txt;
      font-size: 14px;
    }
    hr {
      margin: 10px 0;
      border: 1px solid #bfbfbf;
    }
    .hr {
      margin-top: 28px;
    }
    .detail {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      // background: red;
      font-size: 14px;
      color: @txt;
      .Both;
      .indexTitle {
        float: left;
        width: 30px;
        padding-bottom: 30px;
      }
      .test-detail {
        float: left;
        width: 259px;
        box-sizing: border-box;
        padding-bottom: 10px;
      }
    }
    .btn {
      margin: 10px auto;
      height: 37px;
      width: 106px;
      background: @main;
      line-height: 37px;
      text-align: center;
      color: #fff;
    }
    //选择课程
    .groupClass {
      .spaBtw;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding: 0 22px;
      width: 100%;
      .class-detail {
        margin-top: 19px;
        height: 1.375rem;
        width: 4.5rem;
        border-radius: 8px;
        line-height: 1.375rem;
        text-align: center;
        color: @txt;
        font-size: 0.6875rem;
        border: 1px solid @main;
      }
      .nullbox {
        width: 72px;
        height: 1px;
      }
      .chose {
        background: @main;
        color: #fff;
      }
    }
    .btngourp {
      width: 100%;
      .Both;
      div {
        width: 50%;
        float: left;
        line-height: 1.5625rem;
        text-align: center;
        color: @txt;
      }
      .fail {
        width: 50%;
      }
      .next {
      }
    }
  }
}
.centers {
  top: 20% !important;
}
</style>
