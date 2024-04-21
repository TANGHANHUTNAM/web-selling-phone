<template>
  <div>
    <header>
      <div style="background-color: var(--second-blue)">
        <div class="container py-4">
          <nav class="d-flex">
            <h6 class="mb-0">
              <a href="" class="text-white-50">Home</a>
              <span class="text-white-50 mx-2"> > </span>
              <a href="" class="text-white"><u>All Products</u></a>
            </h6>
          </nav>
        </div>
      </div>
    </header>
    <!-- ProductGrid -->
    <div>
      <ProductGrid :products="products" />
    </div>
    <!-- ProductGrid -->
  </div>
</template>

<script>
import ProductGrid from "../components/product/ProductGrid.vue";
import { products } from "../assets/js/fake-data.js";
// import { reactive } from "vue";
export default {
  components: {
    ProductGrid,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
.product-item-price-new {
  font-size: 1.2rem;
  margin: 0;
  color: var(--primary-red);
}
.product-item-price-old {
  font-size: 0.9rem;
  margin: 0;
  text-decoration-line: line-through;
  color: var(--primary-red);
}

.product-item-card {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.product-item-rating {
  color: var(--primary-yellow);
}
</style>
