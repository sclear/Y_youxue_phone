<template>
  <div class="topMenu">
      <div class="menu-content">
          <div  @click="chose(0)" :class="menu===0?'chose':''" class="fir">{{menuList[0]}}</div>
          <div  @click="chose(1)" :class="menu===1?'chose':''">{{menuList[1]}}</div>
          <div  @click="chose(2)" :class="menu===2?'chose':''">{{menuList[2]}}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
      menuList: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
        menu:0
    }
  },
  methods: {
    chose(res) {
        this.menu = res;
        this.$emit('choseTop',res)
    }  
  }
}
</script>

<style lang='less' scoped >
.topMenu{
    background: white;
    border-bottom:2px solid @bgcol;
    .menu-content{
        width:20.5rem;
        margin:0 auto;
        .Both;
        &>div{
            float: left;
            margin:11px 0 15px 0;
            color:@txt;
            position: relative;
        }
        &>div:not(.fir){
            margin-left: 1.6875rem;
        }
    }
}
.chose{
    &::after{
        position: absolute;
        content:'';
        display:block;
        height:2px;
        width:30px;
        top:37px;
        left:50%;
        margin-left: -15px;
        background: @main;
    }
}
</style>
