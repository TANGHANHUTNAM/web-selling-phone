<template>
  <div>
 
    <!-- ProductGrid -->
    <div class="container">
      <h1 class="my-4 text-uppercase">Tất cả sản phẩm</h1>
      <ProductGrid :products="products" />
    </div>
    <!-- ProductGrid -->
    <div class="container d-flex justify-content-end mt-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination d-flex">
          <li class="page-item"><a class="page-link" href="#" @click="prePage()">Trở lại</a></li>
          <li class="page-item"><a class="page-link" href="#" @click="nextPage()">Tiếp theo</a></li>
        </ul>
      </nav>
    </div>
  
  </div>
</template>

<script>

import axios from "axios";
import { ref } from "vue"
import ProductGrid from "../components/product/ProductGrid.vue";

export default {
  components: {
    ProductGrid
  },
  setup() {
    const products = ref(null);
    const currentPage = ref(1);
    const getProducts = async () => {
        const response = await axios.get(`http://localhost:8081/api/products?page=${currentPage.value}`);
        products.value = response.data;
    };
    function nextPage() {
      currentPage.value++;
      getProducts();
    }
    function prePage() {
      if (currentPage.value > 1) {
        currentPage.value--;
        getProducts();
      }
    }
    function onLoadPage(page){
      currentPage.value = page;
      getProducts();
    }
    getProducts();  
    return {
      products, nextPage, prePage, onLoadPage
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

.page-item{
  cursor: pointer;
  width: 100px;
  text-align: center;
}
</style>
