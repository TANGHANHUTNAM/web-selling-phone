<template>
  <div class="mt-5">
    <div class="container mb-5" v-if="useAdminProduct.allProduct.length > 0">
      <h2 class="text-center heading-product">DANH SÁCH SẢN PHẨM</h2>
      <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
        <div
          class="col g-3"
          v-for="product in useAdminProduct.allProduct"
          :key="product._id"
        >
          <div
            class="card card-item p-2 w-100 h-100 rounded-4 product-item-card d-flex flex-column"
          >
            <img
              :src="`http://localhost:8081${product.thumbnail}`"
              class="card-img-top"
              alt=""
            />
            <div
              class="card-body p-1 d-flex flex-column justify-content-around"
            >
              <h6
                class="card-title d-flex justify-content-center align-items-center product-item-card-name text-center"
              >
                {{ product.title }}
              </h6>
              <h6
                class="card-title d-flex justify-content-center align-items-center product-item-card-name text-center"
              >
                Hãng: {{ product.brand.name }}
              </h6>
              <h5 class="card-text w-100 m-0 product-item-card-des text-center">
                {{ product.des }}
              </h5>
              <div
                class="d-flex w-100 align-items-center my-2 justify-content-between"
              >
                <h5 class="text-danger mb-0">
                  {{ formatPrice(product.new_price) }}đ
                </h5>
                <small
                  v-if="Number(product.old_price) > 0"
                  class="text-danger mb-0 text-decoration-line-through"
                  >{{ formatPrice(product.old_price) }}đ</small
                >
              </div>
              <h4 class="text-danger">Số lượng: {{ product.number }}</h4>
              <h5>RAM: {{ product.ram }}</h5>
              <h5>ROM: {{ product.rom }}</h5>
              <p class="">
                Đánh giá: {{ product.rating }}
                <i class="bi bi-star-fill text-warning"></i>
              </p>
              <h4 v-if="product?.is_newProduct > 0" class="new_product me-2">
                New
              </h4>
              <h4
                v-else-if="product?.is_bestSeller > 0"
                class="bestseller_product"
              >
                Hot
              </h4>
            </div>
            <router-link
              class="text-decoration-none text-dark d-flex flex-column h-100"
              :to="{
                name: 'admin-product-update',
                params: { id: product._id },
              }"
            >
              <div class="btn btn-primary mb-1 btn-add-cart">Cập nhật</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if="useAdminProduct.allProduct.length === 0" class="text-center">
      <h1>KHÔNG CÓ SẢN PHẨM HẾT HÀNG NÀO</h1>
    </div>
    <div class="container d-flex justify-content-end mt-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination d-flex">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="useAdminProduct.backPageAllProduct()"
              >Trở lại</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="useAdminProduct.nextPageAllProduct()"
              >Tiếp theo</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAdminProductStore } from "../stores/adminProduct";
const useAdminProduct = useAdminProductStore();
onMounted(() => {
  useAdminProduct.getAllProduct();
});

function formatPrice(value) {
  if (!value) {
    return "";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
</script>

<style scoped>
.heading-product {
  background-color: var(--primary-blue);
  padding: 10px;
  border-radius: 10px;
  color: white;
}
</style>
