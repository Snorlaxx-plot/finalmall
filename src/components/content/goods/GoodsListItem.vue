<!--  -->
<template>
  <div>
    <a href="item.">
      <img :src="singlegoodsitem.show.img" alt="" />
      <div>
        <p>{{ singlegoodsitem.title }}</p>
      </div>
      <span class="price">{{ singlegoodsitem.price }}</span>
      <span class="cfav">{{ singlegoodsitem.cfav }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    singlegoodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
</style>
