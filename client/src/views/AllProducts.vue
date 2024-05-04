<template>
  <div>
    <div class="container pt-3">
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-3">
        <Brand v-for="brand in brands" :key="brand._id" :brand="brand"/>
      </div>
    </div>
    
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
import Brand from "../components/product/Brand.vue"
export default {
  components: { 
    ProductGrid, Brand
  },
  setup() {
    const products = ref(null);
    const currentPage = ref(1);
    const brands = ref([]);
    const getProducts = async () => {
        const response = await axios.get(`http://localhost:8081/api/product?page=${currentPage.value}`);
        const getBrands = await axios.get(`http://localhost:8081/api/brand`);
        products.value = response.data;
        brands.value = getBrands.data;
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
    getProducts();  
    return {
      products, brands, nextPage, prePage
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
.page-link{
    color: var(--primary-blue);
    border: 1px solid var(--primary-blue);
    transition: all 0.3s;
    font-weight: 500;
}
.page-link:hover{
    background-color: var(--primary-red);
    color: var(--primary-white);
    border: 1px solid var(--primary-red);
}

</style>
