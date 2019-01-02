<template>
  <div class="test">
    <transition name="modeshade">
      <div v-if="showtext" class="shade"></div>
    </transition>
    <transition name="tras">
      <div v-if="showtext" class="tests">
        <div @click=" $emit('showtest') " class="closetest">X</div>
        <div class="title">开始测评</div>
        <hr>
        <div class="detail">
          <div class="indexTitle">1—</div>
          <div class="test-detail">
            <div>Tom: Nice to meet you! what your name... how are you ( )</div>
            <div>Tone:________________</div>
            <div class="fs11 mt7">A:Thank you</div>
            <div class="fs11 mt7">B:Thank you</div>
            <div class="fs11 mt7">C:Thank you</div>
            <div class="fs11 mt7">D:Nice to meet you too!</div>
          </div>
        </div>
        <div class="detail">
          <div class="indexTitle">1—</div>
          <div class="test-detail">
            <div>Tom: Nice to meet you! what your name... how are you ( )</div>
            <div>Tone:________________</div>
            <div class="fs11 mt7">A:Thank you</div>
            <div class="fs11 mt7">B:Thank you</div>
            <div class="fs11 mt7">C:Thank you</div>
            <div class="fs11 mt7">D:Nice to meet you too!</div>
          </div>
        </div>
        <div class="detail">
          <div class="indexTitle">1—</div>
          <div class="test-detail">
            <div>Tom: Nice to meet you! what your name... how are you ( )</div>
            <div>Tone:________________</div>
            <div class="fs11 mt7">A:Thank you</div>
            <div class="fs11 mt7">B:Thank you</div>
            <div class="fs11 mt7">C:Thank you</div>
            <div class="fs11 mt7">D:Nice to meet you too!</div>
          </div>
        </div>
        <div class="detail">
          <div class="indexTitle">1—</div>
          <div class="test-detail">
            <div>Tom: Nice to meet you! what your name... how are you ( )</div>
            <div>Tone:________________</div>
            <div class="fs11 mt7">A:Thank you</div>
            <div class="fs11 mt7">B:Thank you</div>
            <div class="fs11 mt7">C:Thank you</div>
            <div class="fs11 mt7">D:Nice to meet you too!</div>
          </div>
        </div>
        <div class="btn">立即提交</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showtext: {
      type: Boolean,
      required: false,
      default: false
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
    padding: 0.875rem 0 0.9375rem 0;
    width: 20.5625rem;
    background: white;
    position: absolute;
    left: 50%;
    margin-left: -10.28125rem;
    top: 1.1875rem;
    z-index: 50;
    .closetest {
      position: absolute;
      right: 0.3125rem;
      top: 0.3125rem;
    }
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
        width: calc(~"50% - 1px");
        border-right: 1px solid @txt;
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
