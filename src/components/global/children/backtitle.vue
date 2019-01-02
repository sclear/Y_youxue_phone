<template>
  <div class="backBox">
    <div class="backtitle">
      <div @click="back"><</div>
      <div>{{text}}</div>
      <div @click="empty" class="collect">{{righttxt}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      required: true
    },
    righttxt: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    empty() {
      this.$emit("empty");
    }
  }
};
</script>

<style lang='less' scoped >
.backBox{
    background: white;
}
.backtitle {
  height: 42px;
  text-align: center;
  line-height: 2.625rem;
  position: relative;
  color: @txt;
  width: 20.5rem;
  margin: 0 auto;
  .spaBtw;
  div:nth-of-type(1) {
    color: red;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: @txt;
  }
  div:nth-of-type(2) {
    font-size: 1.125rem;
  }
  div:nth-of-type(3) {
    font-size: .75rem;
    color: @stxt;
  }
}
.collect{
  line-height: 2.9375rem;
}
</style>
