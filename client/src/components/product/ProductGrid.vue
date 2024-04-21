<template>
  <div class="container py-4">
    <h1>IPHONE</h1>
    <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 w-100 row-cols-1">
      <ProductGridItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductGridItem from "./ProductGridItem.vue";
export default {
  name: "ProductGrid",
  props: {
    products: {
      type: Object,
      default: () => ({}),
    }
  },
  components: {
    ProductGridItem,
  },
};
</script>
