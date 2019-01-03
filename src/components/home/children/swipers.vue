<template>
  <div class="swiperBox">
    <div class="swi">
      <div class="swiper-wrapper">
        <div v-for="(item,index) in list" :key="index" class="swiper-slide">
          <img @click="toLink(item.banner_url)" :src="item.banner" alt>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
//主页轮播
<script>
import _api from "./../../../api/api.js";
import swiper from "swiper";
export default {
  mounted() {
    this.getInfo();
    setTimeout(() => {
      var myswiper = new swiper(".swi", {
        loop: true,
        clickable: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          clickableClass: "my-pagination-clickable"
        }
      });
    }, 1000);
  },
  methods: {
    getInfo() {
      _api.getBanner().then(res => {
        this.list = res.data.data;

        // var myswiper = new swiper(".swi", {
        //   loop: true,
        //   clickable: true,
        //   pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //     clickableClass: "my-pagination-clickable"
        //   }
        // });
      });
    },
    toLink(res) {
      location.href = res;
    }
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<style lang='less' scoped >
.swiperBox {
  position: relative;
  width: 20.4375rem;
  height: 9.4375rem;
  // background: chocolate;
  margin: 0 auto;
  overflow: hidden;
}
.swi {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
