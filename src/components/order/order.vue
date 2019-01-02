<template>
  <div class="course">
      <back text='订单管理'></back>
      <like-hr></like-hr>
      <top-menu :menuList='menuList' @choseTop='choseTop'></top-menu>
      <div class="content-body">
          <!-- 菜单1选项 -->
          <div v-if="nowNum === 0" class="content">
              <!-- 详情 -->
              <buys></buys>
              <buys></buys>
              <buys></buys>

              <div class="not0">
                  <div>你还没有任何收藏哦</div>
              </div>
          </div>
          <!-- 菜单2选项 -->
          <div v-if="nowNum === 1" class="content">
              <buys></buys>

          </div>
          <!-- 菜单3选项 -->
          <div v-if="nowNum === 2" class="content">
              <buys></buys>
              <buys></buys>

          </div>
      </div>
  </div>
</template>

<script>
//C V components
export default {
  name:'course',
  data() {
    return {
        menuList:['全部订单', '待付款',   '已取消'],    //菜单选项
        nowNum:0,       //当前菜单所处位置
    }
  },
  components: {
      buys: ()=> import('./children/buys.vue')
  },
  methods: {
      choseTop(res) {
          this.nowNum = res;
          console.log(res)
      }
  }
}
</script>

<style lang='less' scoped >
.content-body{
    height: ~"calc(100vh - 98px)";
    width:100%;
    overflow: auto;
    background: @bgcol;
    .content{
        width:100%;
        .not0{
            text-align: center;
            font-size: 20px;
            color:#CFCFCF;
            margin-top: 100px;
        }
    }
}
</style>
