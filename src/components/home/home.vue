<template>
  <div class="home">
      <!-- <serch></serch> -->
      
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {
      serch: () => import('./../common/serch.vue')
  }
};
</script>

<style lang='less' scoped >
.home{}
</style>
