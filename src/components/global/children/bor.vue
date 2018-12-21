<template>
  <div class="bor">{{text}}</div>
</template>
// 文本底部 前两个文字 带border-bottom
<script>
export default {
  data() {
    return {};
  },
  props:{
      text:{
          type: String,
          required:true
      }
  },
  components: {}
};
</script>

<style lang='less' scoped >
.bor {
  font-weight: normal;
  color: @dtxt;
  font-size: 1.0625rem;
  position: relative;
  &::after {
    content: "";
    width: 35px;
    height: 3px;
    position: absolute;
    background: @main;
    left: 0;
    bottom: -5px;
  }
}
</style>
