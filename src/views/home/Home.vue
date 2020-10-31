<!-- shouye view -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"> </home-swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";

import { getHomeMultidata } from "@/network/home.js";
export default {
  data() {
    return {
      banner: [],
      // dkeyword: [],
      keywords: [],
      recommend: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
  },
  created() {
    getHomeMultidata().then((res) => {
      //异步操作
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.keywords = res.data.keywords.list;
      // this.dkeyword = res.data.dkeyword;
      // console.log(res);
    });
  },
};
</script>

<style  scoped>
.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
