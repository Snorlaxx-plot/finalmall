<!-- homeswiper -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperimageload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper.vue";
import SwiperItem from "@/components/common/swiper/SwiperItem.vue";
export default {
  data() {
    return {
      imageload: false,
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperimageload() {
      if (!this.imageload) {
        this.$emit("swiperimageload");
        this.imageload = true;
      }
    },
  },
};
</script>

<style  scoped>
</style>
