<!-- back -->
<template>
  <div>
    <div class="backtop"></div>
  </div>
</template>

<script>
// import BScroll from "@/components/common/scroll/Scroll";
export default {
  data() {
    return {};
  },
};
</script>

<style  scoped>
.backtop {
  z-index: 10;
  position: fixed;
  right: 3px;
  bottom: 50px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid var(--color-high-text);
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  color: var(--color-high-text);
}
.backtop::after {
  content: "\e62c";
  font-family: "iconfont";
}
</style>
