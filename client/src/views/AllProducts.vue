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

    <div class="" id="page-wrap">
      <div class="grid-wrap">
        <div class="product-item" v-for="product in products" :key="product.id">
          <img :src="product.imgURL" alt="" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ product.price_new }}</p>
          <p class="product-price">{{ product.price_old }}</p>
          <router-link
            :to="{ name: 'ProductsDetails', params: { id: product.id } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../assets/js/fake-data.js";
// import { reactive } from "vue";
export default {
  setup() {
    return {
      products,
    };
  },
};
</script>
