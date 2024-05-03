<template>
  <div class="col g-3">
    <div class="card card-item p-2 w-100 h-100 rounded-4 product-item-card d-flex flex-column">
        <img :src="`http://localhost:8081${product.thumbnail}`" class="card-img-top" alt="" />
        <div class="card-body p-1 d-flex flex-column justify-content-around">
          <h6 class="card-title d-flex justify-content-center align-items-center product-item-card-name text-center">{{ product.title }}</h6>
          <p class="card-text w-100 m-0 product-item-card-des">
            {{ product.des }}
          </p>  
          <div class="d-flex w-100 align-items-center my-2 justify-content-between">
            <p class="product-item-price-new">{{ formatPrice(product.new_price) }}đ</p>
            <small v-if="Number(product.old_price) > 0" class="product-item-price-old">{{ formatPrice(product.old_price)}}đ</small>
          </div>
          <p class="">
            Đánh giá: {{ product.rating }}
            <i class="bi bi-star-fill product-item-rating"></i>
          </p>
        </div>
      <router-link
      class="text-decoration-none text-dark d-flex flex-column h-100"
      :to="{ name: 'ProductsDetails', params: { id: product._id } }"
      >
      <div class="btn btn-primary mb-1 btn-add-cart">Xem chi tiết</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import {ref, onMounted} from "vue"
export default {
  name: "ProductGridItem",
  props: {
    product: [
      Object, Array
    ],
  },
  setup() {
    function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return {
      formatPrice
    }
  }
}
</script>

<style scoped>
.product-item-price-new {
  margin: 0;
  color: var(--primary-red);
}
.product-item-price-old {
  margin: 0;
  text-decoration-line: line-through;
  color: #878ba2
}

.product-item-card-name {
  height: 3rem;
}

.product-item-card-des {
  font-weight: 500;
  height: 4rem;
}

.product-item-card {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: clamp(0.75rem, 1.2vw, 1.3rem);
}

.product-item-rating {
  color: var(--primary-yellow);
}

.btn-add-cart{
  font-weight: 600;
  font-size: clamp(0.75rem, 1vw, 1.2rem);
  border: none
}

.btn-add-cart:hover {
  background-color: var(--primary-red);

}

.card-img-top:hover {
  transform: scale(1.02)
}
</style>
