<template>
  <div class="classmain">
    <!-- <div class="title">课程分类</div> -->
    <back text='课程分类'></back>
    <!-- <div class="bgBox"> -->
      <div v-for="(item,index) in list" :key="index" class="detail">
        <div class="logo">
          <div>icon</div>
          <div>{{item.list_name}}</div>
        </div>
        <div class="group">
          <div @click="toRoute(items.id,items.list_name)" v-for="(items,indexs) in item.children" :key="indexs">{{items.list_name}}1</div>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import _api from "./../../api/api.js";
export default {
  mounted() {
    this.getInfo();
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    getInfo() {
      _api.getList().then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.list = res.data.data;
        }
      });
    },
    toRoute(res,title) {
        console.log(1)
        this.$router.push({
            path:'/classify',
            query:{
                id:res,
                title:title
            }
        })
    }
  }
};
</script>

<style lang='less' scoped >
.classmain {
  background: @bgcol !important;
//   padding-bottom: 26px;
  min-height:100vh;
  .title {
    height: 2.625rem;
    text-align: center;
    color: @txt;
    font-size: 1.0625rem;
    line-height: 2.625rem;
    position: relative;
    background: white;
    &::after {
      content: "<";
      position: absolute;
      left: 0.75rem;
      font-size: 1.25rem;
    }
  }
  .detail {
    margin: 0.625rem auto 0 auto;
    width: 20.5rem;
    box-sizing: border-box;
    padding: 0.625rem 0.9375rem 0 1.625rem;
    background: white;
    .logo {
      height: 1.75rem;
      width: 100;
      .Both;
      div {
        float: left;
      }
      div:first-child {
        font-size: 20px;
        line-height: 1.75rem;
        color: @txt;
      }
      div:last-child {
        line-height: 1.75rem;
        font-size: 0.875rem;
        color: @txt;
        box-sizing: border-box;
        padding-top: 0.125rem;
        margin-left: 0.625rem;
      }
    }
    .group {
      width: 100%;
      padding-bottom: 1.3125rem;
      display: flex;
      .spaBtw;
      flex-wrap: wrap;
      div {
        width: 5rem;
        margin-top: 0.9375rem;
        color: #6f6f6f;
        font-size: 0.6875rem;
      }
      div:nth-child(3n + 1) {
        text-align: left;
      }
      div:nth-child(3n + 2) {
        text-align: center;
      }
      div:nth-child(3n + 3) {
        text-align: right;
      }
    }
  }
}
// .bgBox{
//     height:~"calc(100vh - 42px)";
//     background: @bgcol;
// }
</style>
