<template>
  <div class="course">
      <back text='课程分类'></back>
      <like-hr></like-hr>
      <top-menu :menuList='menuList' @choseTop='choseTop'></top-menu>
      <div class="content-body">
          <!-- 菜单1选项 -->
          <div v-if="nowNum === 0" class="content">

          </div>
          <!-- 菜单2选项 -->
          <div v-if="nowNum === 1" class="content"></div>
          <!-- 菜单3选项 -->
          <div v-if="nowNum === 2" class="content"></div>
      </div>
  </div>
</template>

<script>
//C V components
export default {
  name:'course',
  data() {
    return {
        menuList:['已购课程', '正在学习',   '已学课程'],    //菜单选项
        nowNum:0,       //当前菜单所处位置
    }
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
    .content{
        width:100%;
    }
}
</style>
