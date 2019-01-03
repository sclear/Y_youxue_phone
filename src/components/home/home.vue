<template>
  <div class="home">
    <!-- <serch></serch> -->
    <!-- 轮播 -->
    <swipers>
      
    </swipers>

    <!-- 课程分类 -->
    <classo></classo>

    <!-- 分割线 -->
    <like-hr class="mt7"></like-hr>

    <!-- 推荐课程 -->
    <refer></refer>

    <!-- 分割线 -->
    <like-hr class="mt28"></like-hr>

    <!-- 精品课程 -->
    <goods></goods>

    <!-- 时间排序分类 -->
    <timeclass></timeclass>

    <!-- 测评model   !-->
    <test v-if="test"></test>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test:false
    };
  },
  components: {
    serch:    () => import("./../common/serch.vue"),
    test:     () => import("./../common/test.vue"),
    swipers:  () => import("./children/swipers.vue"),
    classo:   () => import("./children/classo.vue"),
    refer:    () => import("./children/refer.vue"),
    goods:    () => import("./children/goods.vue"),
    timeclass:() => import("./children/timeclass.vue"),
    model:    () => import("./../home/model.vue")
  }
};
</script>

<style lang='less' scoped >
.home {
  hr{
    border:none;
    height:.4375rem;
    width:100%;
    background: @bgcol;
  }
}
</style>
