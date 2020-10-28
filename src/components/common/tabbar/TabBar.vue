<!-- tabbar -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-content: center;

  background-color: #f6f6f6;
}
/* #tab-bar */
</style>
