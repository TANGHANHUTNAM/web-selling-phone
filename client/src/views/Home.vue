<template>
  <carousel-home />
  <category-home />
  <newproduct-home />
  <banner-home />
  <recommend-home />
</template>

<script>
import Carousel from "../components/home/CarouselHome.vue";
import Category from "../components/home/CategoryHome.vue";
import NewProduct from "../components/home/NewProductHome.vue";
import Banner from "../components/home/BannerHome.vue";
import Recommend from "../components/home/RecommendHome.vue";
export default {
  setup() {
    return {};
  },
  components: {
    "carousel-home": Carousel,
    "category-home": Category,
    "newproduct-home": NewProduct,
    "banner-home": Banner,
    "recommend-home": Recommend,
  },
};
</script>
