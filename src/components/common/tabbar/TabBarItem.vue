<!-- tabbaritem -->
<template>
  <div id="tab-bar-item" @click="tabClick">
    <div>
      <!-- <img src="../../assets/img/tabbar/icon_dnyun58wlua/shouye.png" alt="" />
      <p>首页</p> -->
      <div v-if="isActive"><slot name="item-icon"> </slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="colorActive"><slot name="item-text"> </slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    // 由父组件App.vue传入此自定义属性
    inputColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      //   isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == -1;
    },
    colorActive() {
      return !this.isActive ? { color: this.inputColor } : {};
    },
  },
  methods: {
    tabClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style  scoped>
#tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
