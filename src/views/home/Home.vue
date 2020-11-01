<!-- shouye view -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"> </home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <!-- 将请求到的数据传入子组件 -->
    <home-popular></home-popular>
    <tab-control
      class="tab-control"
      :titles="['流行', '新品', '精选']"
    ></tab-control>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import HomeRecommend from "@/views/home/childComponents/HomeRecommend/HomeRecommend.vue";
import HomePopular from "@/views/home/childComponents/Popular";

import TabControl from "@/components/content/tabControl/TabControl";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
export default {
  data() {
    return {
      banner: [],
      // dkeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        popular: { page: 0, list: [] },
        new: { page: 0, list: [] },
        selected: { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("popular");
    this.getHomeGoods("new");
    this.getHomeGoods("selected");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //异步操作,请求首页数据
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        this.keywords = res.data.keywords.list;
        // this.dkeyword = res.data.dkeyword;
        // console.log(res);
      });
    },
    getHomeGoods(type) {
      // 拿到当前页码
      const page = this.goods[type].page;
      // 请求当前页面和类型的数据，每页30个数据，上拉加载更多页
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // 将请求到的数据合并之前的list 且page+1
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      });
    },
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0;
  z-index: 3;
  color: #fff;
  background-color: var(--color-tint);
}
.tab-control {
  position: sticky;
  top: 44px;
  /* z-index: 0; */
}
</style>
