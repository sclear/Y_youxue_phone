<template>
  <div class="evals">
    <back text="测评"></back>
    <like-hr></like-hr>
    <div class="bgWhite">
      <div class="bg-content">
        <div class>你当前选择的兴趣分类是</div>
        <div @click="showclose">重新选择
          <span> > </span>
        </div>
      </div>
    </div>

    <div class="bg-chose">
        <div class="bg-child">
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div>英语语法</div>
            <div class="nulls"></div>
            <div class="nulls"></div>
        </div>
    </div>

    <!--当前 -->
    <like-hr></like-hr>
    <div class="bgWhite">
      <div class="bg-content">
        <div class>你当前的测评结果是</div>
        <div @click="showtest">重新测评
          <span> > </span>
        </div>
      </div>
    </div>

    <div class="bg-chose">
        <div class="bg-time">
            <div>2018-12-11  <span>英语水平中级学者</span></div>
        </div>
    </div>
    <choseclass @showclose='showclose' :show='show'></choseclass>
    <testcenter @showtest='showtest' :showtext='showtext'></testcenter>
  </div>
</template>

<script>
//测评
export default {
  name: "evals",
  data() {
    return {
        show:false,
        showtext:true,
    };
  },
  methods: {
    showclose() {
        this.show = !this.show;
    },
    showtest() {
        this.showtext = !this.showtext;
    }
  },
  components: {
      choseclass: ()=> import('./../../common/choseclass.vue'),
      testcenter: ()=> import('./../../common/testcenter.vue'),
  }
};
</script>

<style lang='less' scoped >
.evals {
  height: 100vh;
  background: @bgcol;
  .bgWhite {
    background: white;
    .bg-content {
      width: 20.5rem;
      height: 47px;
      margin: 0 auto;
      .spaBtw;
      div{
          margin-top: 20px;
      }
      div:nth-child(1) {
        color: @txt;
        font-size: 14px;
      }
      div:nth-child(2) {
        color: @stxt;
        font-size: 12px;
        position: relative;
        right:20px;
        span:first-child{
            position: absolute;
            right:-20px;
            top:-5px;
            font-size: 20px;
        }
      }
    }
  }
  .bg-chose{
      background:white;
      .bg-child{
          width:20.5rem;
          margin: 0 auto;
          padding:29px 0;
          display: flex;
          margin-top: 1px;
          justify-content: space-around;
          flex-wrap: wrap;
          div{
              width:6.25rem;
              text-align:center;
              margin-top: 10px;
              color:@txt;
          }
          .nulls{
              height:0px;
          }
      }
      //第二层级
      .bg-time{
          width:20.5rem;
          margin: 0 auto;
          padding:29px 0;
          display: flex;
          margin-top: 1px;
          div{
              box-sizing:border-box;
              padding-left: 20px;
              font-size:12px;
              color:@txt;
              span{
                  margin-left:2.3125rem;
              }
          }
      }
  }
}
</style>
