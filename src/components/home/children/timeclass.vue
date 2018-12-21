<template>
  <div class="timeclass">
      <div class="title">按更新时间排序 </div>
      <div class="group">
          <div v-for="(item,index) in list" :key="index" class="detail">
              <div class="img"></div>
              <div class="detail-title">高中数学知识汇总学习</div>
              <div class="time-money">
                  <div>￥289</div>
                  <div>10课时</div>
              </div>
              <div class="stu-time">
                  <div>268人正在学习</div>
                  <div>2018-12-11更新</div>
              </div>
          </div>
      </div>
      <div class="more">加载更多...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[1,3,4,56]
    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
.timeclass{
    width:20.4375rem;
    margin: 0 auto;
    .Both;
    .title{
        float: right;
        color:@txt;
        font-size: 11px;
        line-height: 1.375rem;
    }
    .group{

        .spaBtw;
        flex-wrap: wrap;
        width:100%;
        .detail{
            height:175px;
            width:157px;
            box-sizing: border-box;
            margin-top: .75rem;
            border: 1px solid #BFBFBF;
            border-top: none;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            
            .img{
                width:9.8125rem;
                height:5.5625rem;
                background: chartreuse;
                border-radius: 5px;
                position: relative;
                margin :0 0 0 -1px;
                top:-1px;
                z-index: 30;
            }
            .detail-title{
                color:@dtxt;
                font-size: .875rem;
                text-align: center;
                margin-top: .5625rem;
            }
            .time-money{
                margin:8px 0 8px 0;
                .Both;
                div{ float: left; }
                div:first-child{
                    font-size: 16px;
                    color:@red;
                }
                div:last-child{
                    margin-left: .6875rem;
                    font-size: .6875rem;
                    color:@txt;
                    margin-top: 4px;
                }
            }
            .stu-time{
                .spaBtw;
                div{
                    color:@stxt;
                    font-size: 8px;
                }
            }
        }
    }
    .more{
        text-align: center;
        font-size: .875rem;
        color:@main;
        margin:21px 0 93px 0;
    }
}
</style>
