<template>
  <div class="backtitle">
      {{text}}
      <div><</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:{
      text:{
          type:String,
          required:true
      }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
.backtitle{
    height:42px;
    text-align: center;
    line-height: 42px;
    position: relative;
    color:@txt;
    div{
        position: absolute;
        left:20px;
        top:0px;
        font-size: 20px;
        line-height: 40px;
        color:@txt;
    } 
}
</style>
