<template>
  <div class="classo">
      <div>
          <span></span>
          <span>课程分类</span>
      </div>
      <div>
          <span></span>
          <span>精选课件</span>
      </div>
      <div>
          <span>热门课程</span>
          <span></span>
      </div>
      <div>
          <span></span>
          <span>相关资讯</span>
      </div>
  </div>
</template>
//课程分类
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
.classo{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width:20.4375rem;
    margin: 0 auto;
    &>div{
        background: @bgcol;
        height:2.9375rem;
        width:8.9375rem;
        margin-top: .75rem;
        text-align: center;
        line-height: 2.9375rem;
        font-size: .875rem;
        color:@dtxt;
    }
}
</style>
