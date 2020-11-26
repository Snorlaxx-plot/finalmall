<!-- scroll -->

<template>
  <div class="wrapper" ref="thisWrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
/* eslint-disable */
export default {
  data() {
    return {
      scroll: null,
      message: "scroll组件",
      displayBackTop: false,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      //是否上拉加载更多
      type: Boolean,
      default: false,
    },
  },
  components: {
    // BScroll,
  },
  mounted() {
    const options = {
      probeType: this.probeType,
      scrollY: true,
      click: true,
      pullUpLoad: true,
    };
    // console.log(BScroll);
    // 创建滚动对象
    this.scroll = new BScroll(this.$refs.thisWrapper, options);
    console.log("scroll组件创建:");
    console.log(this.scroll);
    console.log(this.$refs.thisWrapper);
    // console.log(this.probeType);

    // 实时监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("BacktopdispalyChange", position);
    });

    //上拉加载更多

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style  scoped>
</style>
