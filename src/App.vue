<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

    <main-tab-bar class="tabbar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "./assets/css/base.css";
.tabbar {
  z-index: 20;
  font-size: 13px;
}
</style>
