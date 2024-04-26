<template>
  <div>
    <!-- ProductGrid -->
    <div>
      <ProductGrid :products="products" />
    </div>
    <!-- ProductGrid -->
    <div class="container d-flex justify-content-end">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
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
