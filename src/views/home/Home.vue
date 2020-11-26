<!-- shouye view -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">卡比购物</div>
    </nav-bar>
    <tab-control
      class="tab-control-fixed"
      ref="tabcontrol"
      :titles="['流行', '新品', '精选']"
      v-on:tabClick="tabClick"
      v-show="tabcontrolFixed"
    ></tab-control>
    <scroll
      class="scrollContent"
      ref="homescroll"
      :probe-type="3"
      @BacktopdispalyChange="BacktopdispalyChange"
      :pull-up-load="true"
      @pullingUp="pullingUp"
    >
      <home-swiper :banner="banner" @swiperimageload="swiperimageload">
      </home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 将请求到的数据传入子组件 -->
      <home-popular></home-popular>
      <tab-control
        class="tab-control"
        ref="tabcontrol"
        :titles="['流行', '新品', '精选']"
        v-on:tabClick="tabClick"
      ></tab-control>
      <goods-list
        :goodsData="goods[this.$store.state.currentType].list"
      ></goods-list>
    </scroll>
    <back-top @click.native="backtopclick" v-show="currentBackTop"></back-top>
  </div>
</template>

<script>
// 组件无法直接监听事件 但可以@事件 .native
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import HomeRecommend from "@/views/home/childComponents/HomeRecommend/HomeRecommend.vue";
import HomePopular from "@/views/home/childComponents/Popular";

import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";

import { debounce } from "@/common/utils";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
export default {
  data() {
    return {
      banner: [],
      // dkeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      currentBackTop: false,
      tabOffSetTop: 0,
      tabcontrolFixed: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    BackTop,
    Scroll,
  },
  created() {
    console.log("生命周期创建后");
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.$refs.homescroll.scroll.refresh();
  },
  mounted() {
    console.log("生命周期挂载后：");
    //监听图片加载后，刷新betterscroll

    /* //无防抖处理
    this.$bus.$on("singleimageload", () => {
      this.refresh();
    }); */

    /* 防抖处理 */
    const refreshdebounce = debounce(this.refresh, 500);
    this.$bus.$on("singleimageload", () => {
      refreshdebounce();
    });

    /* 不封装refresh函数，直接调用$refs的函数的防抖函数 */
    /* const link = `$refs.homescroll.scroll.refresh`;
    const refreshdebounce = this.debounce(link, 500);

    this.$bus.$on("singleimageload", () => {
      //this为home组件
      refreshdebounce();
    }); */
  },
  activated() {
    console.log("激活后", this.$refs.homescroll);
    // refs取到固定名字的子组件，使用scroll实例的方法
    this.$refs.homescroll.scroll.refresh();
  },
  methods: {
    /* // 网络请求 */
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          //异步操作,请求首页数据
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.keywords = res.data.keywords.list;
          // this.dkeyword = res.data.dkeyword;
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.getHomeMultidata();
        });
    },
    getHomeGoods(type) {
      // 拿到当前页码
      const page = this.goods[type].page + 1;
      // 请求当前页面和类型的数据，每页30个数据，上拉加载更多页
      ///* return一个request，request又return一个instance（配置） */
      getHomeGoods(type, page)
        .catch((err) => {
          console.log(err);
          this.getHomeGoods(this.currentType);
        })
        .then((res) => {
          console.log(type + "商品请求" + page + "页中...");
          // 将请求到的数据合并之前的list 且page+1
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.homescroll.scroll.finishPullUp();
        });
    },
    /* 事件监听 */
    tabClick(index) {
      this.$store.commit("typeChange", index);
      if (!this.goods[this.$store.state.currentType].list.length > 0) {
        this.getHomeGoods(this.$store.state.currentType);
      }
      this.$refs.homescroll.scroll.refresh();
    },
    backtopclick() {
      this.$refs.homescroll.scrollTo(0, 0);
    },
    BacktopdispalyChange(position) {
      if (position.y < -478) {
        this.currentBackTop = true;
      } else {
        this.currentBackTop = false;
      }
      if (position.y < -this.tabOffSetTop) {
        this.tabcontrolFixed = true;
      } else {
        this.tabcontrolFixed = false;
      }
    },
    pullingUp() {
      if (this.goods[this.currentType].list.length > 0) {
        console.log("上拉加载");
        this.getHomeGoods(this.currentType);
      }

      // this.$refs.homescroll.scroll.refresh();
    },
    refresh() {
      this.$refs.homescroll.scroll.refresh();
    },
    swiperimageload() {
      this.tabOffSetTop = this.$refs.tabcontrol.$el.offsetTop;
      console.log(this.tabOffSetTop);
    },
  },
};
</script>

<style  scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  color: #fff;
  background-color: var(--color-tint);
}
.scrollContent {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  /* height: 475px; */
  overflow: hidden;
}
.tab-control-fixed {
  position: fixed;
  top: 44px;
  z-index: 3;
}
</style>
