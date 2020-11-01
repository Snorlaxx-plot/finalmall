<!-- homerecommend -->
<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
// import HomeRecommendItem from "@views/home/childComponents/HomeRecommend/HomeRecommendItem";
// import H from '@D:\前端学习\vue\views\home\childComponents\HomeRecommend\HomeRecommendItem.vue'
export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    // HomeRecommendItem,
  },
};
</script>

<style  scoped>
.recommend {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  text-align: center;
  font-size: 12px;
  margin: 10px 0;
  /* flex-wrap: nowrap; */
}
.recommend div {
  flex: 1;
}
.recommend img {
  width: 80%;
}
</style>
