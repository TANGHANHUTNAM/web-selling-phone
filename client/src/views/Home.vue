<template>
  <div>
      <Carousel />
      <Category />
      <div class="container my-5">
        <h2>SẢN PHẨM MỚI</h2>
        <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <NewProduct v-for="product in new_products" :key="product._id" :product="product"/>
        </div>
      </div>
      <Banner />
      <div class="container my-5">
        <h2>SẢN PHẨM BÁN CHẠY</h2>
        <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 w-100 row-cols-2">
        <NewProduct v-for="product in bestseller_products" :key="product._id" :product="product"/>
        </div>
        <div class="container d-flex justify-content-end mt-4">
          <nav aria-label="Page navigation example">
          <ul class="pagination d-flex">
            <li class="page-item"><a class="page-link" href="#" @click.prevent="prePage()">Trở lại</a></li>
            <li class="page-item"><a class="page-link" href="#" @click.prevent="nextPage()">Tiếp theo</a></li>
          </ul>
          </nav>
        </div>
      </div>
  </div>
</template>

<script setup>
import Carousel from "../components/home/CarouselHome.vue";
import Category from "../components/home/CategoryHome.vue";
import NewProduct from "../components/home/NewProductHome.vue";
import Banner from "../components/home/BannerHome.vue";
import {ref} from "vue";
import axios from "axios";

const new_products = ref([]);
const bestseller_products = ref([]);
const getProducts = async () => {
  const response = await axios.get(`http://localhost:8081/api/product/products/new?page=1`);
  const response2 = await axios.get(`http://localhost:8081/api/product/products/bestseller?page=${currentPage.value}`);
  new_products.value = response.data;
  bestseller_products.value = response2.data;
}

const currentPage = ref(1);
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
</style>
