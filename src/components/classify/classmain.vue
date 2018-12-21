<template>
  <div class="classmain">
      <div class="title">课程分类</div>
      <div class="detail">
          <div class="logo">
              <div>icon</div>
              <div>小学课程</div>
          </div>
          <div class="group">
              <div v-for="(item,index) in list" :key="index">{{item}}</div>
          </div>
      </div>
      <div class="detail">
          <div class="logo">
              <div>icon</div>
              <div>小学课程</div>
          </div>
          <div class="group">
              <div v-for="(item,index) in list" :key="index">{{item}}</div>
          </div>
      </div>
      <div class="detail">
          <div class="logo">
              <div>icon</div>
              <div>小学课程</div>
          </div>
          <div class="group">
              <div v-for="(item,index) in list" :key="index">{{item}}</div>
          </div>
      </div>
      <div class="detail">
          <div class="logo">
              <div>icon</div>
              <div>小学课程</div>
          </div>
          <div class="group">
              <div v-for="(item,index) in list" :key="index">{{item}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:['一年级','一年级','一年级','一年级','一年级','一年级','一年级',]
    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
.classmain{
    background:@bgcol !important;
    padding-bottom: 26px;
    .title{
        height:2.625rem;
        text-align:center;
        color:@txt;
        font-size: 1.0625rem;
        line-height: 2.625rem;
        position: relative;
        background: white;
        &::after{
            content:'<';
            position: absolute;
            left:.75rem;
            font-size: 1.25rem;
        }
    }
    .detail{
        margin: .625rem auto 0 auto;
        width:20.5rem;
        box-sizing:border-box;
        padding: .625rem .9375rem 0 1.625rem;
        background: white;
        .logo{
            height:1.75rem;
            width:100;
            .Both;
            div{ 
                float: left;
            }
            div:first-child{
                font-size: 20px;
                line-height: 1.75rem;
                color:@txt;
            }
            div:last-child{
                line-height: 1.75rem;
                font-size: .875rem;
                color:@txt;
                box-sizing:border-box;
                padding-top: .125rem;
                margin-left: .625rem;
            }
        }
        .group{
            width:100%;
            padding-bottom: 1.3125rem;
            display: flex;
            .spaBtw;
            flex-wrap: wrap;
            div{
                width:5rem;
                margin-top: .9375rem;
                color:#6F6F6F;
                font-size: .6875rem;
            }
            div:nth-child(3n+1){
                text-align: left;
            }
            div:nth-child(3n+2){
                text-align: center;
            }
            div:nth-child(3n+3){
                text-align: right;
            }
        }
    }
}
</style>
