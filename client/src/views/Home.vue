<template>
  <div>
      <Carousel />
      <Category />
      <NewProduct />
      <Banner />
      <Recommend />
  </div>
</template>

<script setup>
import Carousel from "../components/home/CarouselHome.vue";
import Category from "../components/home/CategoryHome.vue";
import NewProduct from "../components/home/NewProductHome.vue";
import Banner from "../components/home/BannerHome.vue";
import Recommend from "../components/home/RecommendHome.vue";
</script>
