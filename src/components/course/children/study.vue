<template>
  <div class="study">
    <div class="imgBox"></div>
    <div class="content">
      <div>24节课，实现EXCEL小白到高手的转变</div>
      <div>
        <span>24课时</span>
        <span>|</span>
        <span>30分钟每课时</span>
      </div>
      <div>
        <span v-color="1">正在学习</span>
        <span>已学
          <span v-color="1">1</span> 课时，还有
          <span v-color="1">23</span> 个课时待学
        </span>
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
.study {
  width: 20.5rem;
  margin: 0 auto;
  height: 3.75rem;
  box-sizing: border-box;
  margin-top: 1rem;
  border-bottom: 0.125rem solid @bgcol;
  .spaBtw;
  .imgBox {
    width: 4.1875rem;
    height: 2.8125rem;
    background: red;
  }
  .content {
    height: 2.8125rem;
    width: 18.375rem;
    margin-left: 2.125rem;
    & > div:nth-child(1) {
      font-size: 12px;
      color: @dtxt;
    }
    & > div:nth-child(2) {
      font-size: 7px;
      color: @dtxt;
      span:nth-child(2) {
        margin: auto 0.5rem;
      }
    }
    & > div:last-child {
      & > span:first-child {
        font-size: 12px;
      }
      & > span:last-child {
        font-size: 5px;
      }
    }
  }
}
</style>
