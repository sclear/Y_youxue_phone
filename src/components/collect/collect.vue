<template>
  <div class="collect">
      <back text='订单管理' righttxt='全部清空'></back>
      <div class="content">
          <cols></cols>
          <div class="not0">你还没有任何收藏哦</div>
      </div>

      <msgbox></msgbox>

  </div>
</template>

<script>
export default {
  data() {
    return {
        showMsg: false
    }
  },
  methods: {
    Offs(res) {
        
    }  
  },
  components: {
    cols: ()=> import('./children/col.vue'),
    msgbox: ()=> import('./children/msgbox.vue')
    //    col: ()=> import('./children/col.vue')
  }
}
</script>

<style lang='less' scoped >
.content{
    height: ~"calc(100vh - 42px)";
    background: @bgcol;
    box-sizing: border-box;
    padding-top: .375rem;
}
.not0{
    color:#CFCFCF;
    font-size: .9375rem;
    text-align: center;
    margin-top: 6.25rem;
}
</style>
