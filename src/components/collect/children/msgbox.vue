<template>
  <div class="msgBox">
      <transition name="modeshade">
          <div v-if="showMsg" class="shade"></div>
      </transition>
      <transition name='tras'>
          <div v-if="showMsg" class="msgBox">
              <div class="toNull">确认要全部清空吗</div>
              <div class="msg">
                  <div @click="Offs(0)">取消</div>
                  <div @click="Offs(1)">好的</div>
              </div>
          </div>
      </transition>
  </div>
</template>

<script>
export default {
  props: {
      showMsg: {
          type: Boolean,
          required: false,
          default: false
      }
  },
  data() {
    return {

    }
  },
  methods: {
      Offs(res) {
          this.$emit('Offs',res)
      }
  }
}
</script>

<style lang='less' scoped >
.shade{
    height:100vh;
    width:100vw;
    background: rgba(0, 0, 0, 0.27);
    position: fixed;
    top:0;
    left:0;
}
.msgBox{
    height: 5.625rem;
    width:267px;
    background: white;
    position: absolute;
    text-align: center;
    line-height: 40px;
    left:50%;
    top:30%;
    margin-left: -133.5px;
    z-index: 90;
    .toNull{
        height:44px;
        color:@txt;
        font-size: .9375rem;
        border-bottom: 1px solid @bgcol;
    }
    .msg{
        .spaBtw;
        div{
            width:50%;
            height:100%;
            text-align: center;
            line-height: 45px;
        }
    }
}
</style>
