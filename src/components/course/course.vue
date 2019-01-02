<template>
  <div class="course">
      <back text='课程分类'></back>
      <like-hr></like-hr>
      <top-menu :menuList='menuList' @choseTop='choseTop'></top-menu>
      <div class="content-body">
          <!-- 菜单1选项 -->
          <div v-if="nowNum === 0" class="content">
              <!-- <div class=""></div> -->
              <study></study>
              <study></study>
              <study></study>
              <study></study>

              <div class="not0">
                  <div></div>
                  <div>您还没有购买课程呢</div>
                  <div>赶快去购买吧</div>
              </div>
          </div>
          <!-- 菜单2选项 -->
          <div v-if="nowNum === 1" class="content">
              <study></study>
              <study></study>
              <study></study>

              <div class="not0">
                  <div></div>
                  <div>您还没有学习的课程呢</div>
                  <div>赶快去学习吧</div>
              </div>
          </div>
          <!-- 菜单3选项 -->
          <div v-if="nowNum === 2" class="content">
              <study></study>
              <study></study>
              <study></study>

              <div class="not0">
                  <div></div>
                  <div>您还没有学习的课程呢</div>
                  <div>赶快去学习吧</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
//此页面涉及到平行组件之间的操作
//取消切换路由 和 切换组件 功能少不采用Bus
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
  },
  components: {
      study: ()=> import('./children/study.vue')
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
        box-sizing: border-box;
        padding-top: 16px;
        .not0{
            font-size: 18px;
            color:#CACACA;
            text-align: center;
            margin-top: 6.25rem;
        }


    }
}
</style>
