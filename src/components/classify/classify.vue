<template>
  <div class="classify">
    <back :text='title'></back>
    <div class="hr"></div>
    <!-- <div class="menu">
      <div @click="choses(index)" v-for="(item,index) in list" :key="index" class="corse" :class="choseIndex===index?'chose':''">{{item}}</div>
    </div> -->
    <hr>
    <div class="group">
        <div class="detail">
            <div class="fir">一年级语文学习</div>
            <div class="tea">刘一老师   </div>
            <div class="years">8年学校教学经验</div>
            <div class="s-group">
                <div>￥199</div>
                <div>66人已购买</div>
            </div>
        </div>
        <div class="detail">
            <div class="fir">一年级语文学习</div>
            <div class="tea">刘一老师   </div>
            <div class="years">8年学校教学经验</div>
            <div class="s-group">
                <div>￥199</div>
                <div>66人已购买</div>
            </div>
        </div>
        <div class="detail">
            <div class="fir">一年级语文学习</div>
            <div class="tea">刘一老师   </div>
            <div class="years">8年学校教学经验</div>
            <div class="s-group">
                <div>￥199</div>
                <div>66人已购买</div>
            </div>
        </div>
        <div class="detail">
            <div class="fir">一年级语文学习</div>
            <div class="tea">刘一老师   </div>
            <div class="years">8年学校教学经验</div>
            <div class="s-group">
                <div>￥199</div>
                <div>66人已购买</div>
            </div>
        </div>
        <div class="detail">
            <div class="fir">一年级语文学习</div>
            <div class="tea">刘一老师   </div>
            <div class="years">8年学校教学经验</div>
            <div class="s-group">
                <div>￥199</div>
                <div>66人已购买</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import _api from './../../api/api.js'
export default {
  mounted () {
      this.title = this.$route.query.title
    console.log(this.$route.query.id) 
    this.getInfo() 
  },
  data() {
    return {
        list:['英语','英语','英语','英语','英语','英语','英语'],
        choseIndex:0,
        title:''
    };
  },
  methods: {
    choses(res) {
        this.choseIndex = res;
    },
    getInfo() {
        _api.getLists({
            list_id:this.$route.query.id
        }).then(res=>{
            console.log(res)
        })
    }
  },
  components: {}
};
</script>

<style lang='less' scoped >
.classify {
  width: 100%;
  overflow: hidden;
  .title {
    height: 2.75rem;
    text-align: center;
    line-height: 2.75rem;
    position: relative;
    color: @txt;
    font-size: 1.0625rem;
    &::after {
      position: absolute;
      content: "<";
      left: 1.25rem;
      font-size: 1.25rem;
      color: @txt;
    }
  }
  hr {
    border:.0625rem solid @bgcol;
  }
  .hr {
    width: 100%;
    height: 0.3125rem;
    background: @bgcol;
  }
  .menu {
    height: 2.9375rem;
    width: 100%;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    // &::-webkit-scrollbar { width: 0 !important }
    padding-left: .8125rem;
    .corse {
      height: 2.8125rem;
      margin-right: 36px;
      padding:0 5px;
      line-height: 2.8125rem;
      color:@txt;
      border-bottom: 2px solid white;
    }
    .chose{
      border-bottom: 2px solid @main;
    }
    
  }
  .group{
        margin: 0 auto;
        width:21.375rem;
        padding-bottom: 1.0625rem;
        .spaBtw;
        flex-wrap: wrap;
        .detail{
            width:9.5625rem;
            height:6.4375rem;
            box-shadow:0px 1px 3px 0 rgba(174,172,172,0.6);
            box-sizing:border-box;
            padding:.875rem 0 0 .9375rem;
            margin-top: 1.6875rem;
            .fir{
                font-size: .6875rem;
            }
            .tea{
                font-size: .5rem;
                color:@txt;
                margin-top: .4375rem;
            }
            .years{
                margin-top: .4375rem;
                font-size: .5rem;
                color:@txt;
            }
            .s-group{
                margin-top: .4375rem;
                .Both;
                div{
                    float: left;
                }
                div:first-child{
                    font-size: .875rem;
                    color:@red;
                }
                div:last-child{
                    margin-top: .3125rem;
                    font-size: .5rem;
                    color:@txt;
                    margin-left: 2.5rem;
                }
            }
        }
    }
}
</style>
