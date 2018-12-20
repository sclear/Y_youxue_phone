<template>
  <div class="serch">
      <div class="icon-z"></div>
      <div class="serch-input">
          <input type="text">
          <div></div>
      </div>
      <div class="icon-z"></div>
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
.serch{
    height:1.6875rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: auto .6875rem;
    width:100%;
    .icon-z{
        height:1.6875rem;
        width:1.6875rem;
        line-height: 1.6875rem;
        text-align: center;
        background: burlywood;
    }
    .serch-input{
        width:15.3125rem;
        height:1.6875rem;
        input{
            height:27px !important;
            width:203px;
            box-sizing: border-box;
            // border:1px solid @bgcol;
            // border-right:1px solid black;
            outline: none;
        }
        div{
            height:1.6875rem;
            width:2.625rem;
            background: red;
            // float: left;
            display: inline-block;
        }
    }
}
</style>
