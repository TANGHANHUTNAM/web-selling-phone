<template>
    <div>
        <div class="container my-4">
        <h1 class="my-4 text-uppercase brand-name">{{ brand.name }}</h1>
        <ProductGrid :products="products" />
        </div>  
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

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router";
import ProductGrid from "./ProductGrid.vue";
const route = useRoute(); 
const products = ref([]);
const brand = ref({});
const currentPage = ref(1);
const getProducts = async () => {
    const response = await axios.get(`http://localhost:8081/api/product/brand/${route.params.brand}?page=${currentPage.value}`);
    const responseBrand = await axios.get(`http://localhost:8081/api/brand/${route.params.brand}`);
    products.value = response.data;
    brand.value = responseBrand.data;
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
onMounted(() => {
    getProducts();
});
</script>

<style scoped>
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

.brand-name{
    color: var(--primary-white);
    background-color: var(--primary-blue);
    width: 100%;
    border: 2px solid var(--primary-blue);
    border-radius: 0.4rem;
    text-align: center;
}
</style>
