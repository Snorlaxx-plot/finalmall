<!-- homeswiper -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
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
    return {};
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
};
</script>

<style  scoped>
</style>
