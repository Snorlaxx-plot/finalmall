<!-- tabcontrol -->
<template>
  <div id="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style  scoped>
#tabControl {
  display: flex;
  width: 100%;
  justify-content: space-around;
  /* align-content: space-around; */
  background-color: #fff;
}
#tabControl div {
  text-align: center;
  margin: 10px 0;
  padding: 2px 0;
}
.active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>
