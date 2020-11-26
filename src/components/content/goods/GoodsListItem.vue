<!--  goodlistitem-->
<template>
  <div class="singleItem">
    <a href="item.">
      <img :src="singlegoodsitem.show.img" alt="" @load="singleimageload" />
      <div class="title">
        <span>{{ singlegoodsitem.title }}</span>
      </div>
      <div class="info">
        <span class="price">{{ singlegoodsitem.price }}</span>
        <span class="cfav">{{ singlegoodsitem.cfav }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    singlegoodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    singleimageload() {
      // 每张图片加载后刷新betterscroll
      //如何拿到首页的scroll实例呢？
      //使用VUex/事件总线
      this.$bus.$emit("singleimageload");
    },
  },
};
</script>

<style  scoped>
/* .singleItem img, */
.singleItem {
  /* display: flex; */
  width: 48%;
  font-size: 12px;
}
.singleItem img {
  width: 100%;
  border-radius: 5px;
}
/* .singleItem a {
  display: flex;

} */
.singleItem .title {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cfav::before {
  content: "\e657";
  font-family: "iconfont";
}
.price {
  color: var(--color-high-text);
}
.singleItem .info {
  display: flex;
  justify-content: center;
}
</style>
