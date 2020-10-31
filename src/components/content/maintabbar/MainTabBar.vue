<!--maintabbar  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" inputColor="#ff5777">
        <i slot="item-icon" class="iconfont tabbaricon">&#xe609;</i>
        <i slot="item-icon-active" class="iconfont tabbariconcolor">&#xe609;</i>

        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/more" inputColor="#ff5777">
        <i slot="item-icon" class="iconfont tabbaricon">&#xe61b;</i>
        <i slot="item-icon-active" class="iconfont tabbariconcolor">&#xe61b;</i>
        <p slot="item-text">更多</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" inputColor="#ff5777">
        <i slot="item-icon" class="iconfont tabbaricon">&#xe63b;</i>
        <i slot="item-icon-active" class="iconfont tabbariconcolor">&#xe63b;</i>

        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" inputColor="#ff5777">
        <i slot="item-icon" class="iconfont tabbaricon">&#xe60d;</i>
        <i slot="item-icon-active" class="iconfont tabbariconcolor">&#xe60d;</i>

        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style  scoped>
i {
  display: inline-block;
  margin-top: 3px;
  width: 23px;
  height: 23px;
  text-align: center;
  vertical-align: middle;
}
</style>
