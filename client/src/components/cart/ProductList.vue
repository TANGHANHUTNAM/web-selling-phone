<template>
  <div v-if="products.length > 0">
    <ProductListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <p v-else>Bạn không có sản phẩm nào trong giỏ hàng!!</p>
</template>

<script>
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
  props: ['products'],
  components: {
    ProductListItem,
  },
};
</script>
