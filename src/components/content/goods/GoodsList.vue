<!-- goodlist -->
<template>
  <div class="goodslist">
    <goods-list-item
      v-for="(item, index) in goodsData"
      :key="index"
      :singlegoodsitem="item"
    >
      <!-- 再次传入数据进子组件  :singlegoodsitem="item"-->
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
  data() {
    return {};
  },
  props: {
    goodsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style  scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* align-content: center; */
}
</style>
