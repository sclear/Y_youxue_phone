<template>
  <div>
    <div class="serchs">
      <input placeholder="请输入你想搜索的课程" type="text">
      <div>取消</div>
    </div>
    <hr>
    <div v-if="0">
      <div class="more">考研英语</div>
      <div class="more">考研英语</div>
    </div>
    <div v-if="1" class="hot">
      <div class="hot-txt">热门搜索</div>
      <div class="group">
        <div>小学英语</div>
        <div>小学英语</div>
        <div>小学英语</div>
        <div>小学英语</div>
        <div>小学英语</div>
        <div class="nullbox"></div>
        <div class="nullbox"></div>
        <div class="nullbox"></div>
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
.serchs {
  padding-top: 10px;
  width: 21.375rem;
  margin: 0 auto 0.4375rem auto;
  height: 27px;
  input {
    outline: none;
    height: 27px;
    width: 264px;
    float: left;
    border: 1px solid #b5b5b5;
    box-sizing: border-box;
    padding-left: 46px;
  }
  div {
    height: 27px;
    box-sizing: border-box;
    padding-top: 4px;
    width: 70px;
    text-align: center;
    display: inline-block;
    color: @txt;
    font-size: 0.6875rem;
  }
}
hr{
    border-top: 1px solid #bfbfbf;

}
input::-webkit-input-placeholder {
  color: #c4c4c4;
  font-size: 12px;
}
.more {
  height: 36px;
  width: 342px;
  margin: 0 auto;
  line-height: 36px;
  font-size: 11px;
  box-sizing: border-box;
  padding-left: 22px;
  border-bottom: 1px solid #bfbfbf;
  color: #bfbfbf;
}
.hot {
  width: 342px;
  margin: 0 auto;
  .hot-txt {
    color: #FF2F2F;
    padding: 23px 0 0 9px;
    font-size: 0.875rem;
  }
  .group{
    color:@txt;
    width:270px;
    padding:0rem 0 0 1.75rem;
    .spaBtw;
    flex-wrap: wrap;
    div{
      width:78px;
      margin-top: 1.5rem;
    }
  }
}
.nullbox{
  width:78px;
  height:1px;
}
</style>
