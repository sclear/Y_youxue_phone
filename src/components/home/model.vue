<template>
 <transition name="fd">
  <div v-if="show" id="demo">
    <!-- <button v-on:click="show = !show">
    Toggle-->
    <!-- </button> -->
    
    <!-- <transition name="fd"> -->
        <div v-if="show" class="showd"></div>
    <!-- </transition> -->
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["show"],
  components: {}
};
</script>

<style lang='less' scoped >
#demo {
//   background: red;
}
#demo{
    position: fixed;
    height: 100vh;
    width: 100vw;
    top:100px;
    left:10px;
    background: rgba(0, 0, 0, 0.507);
}
</style>
