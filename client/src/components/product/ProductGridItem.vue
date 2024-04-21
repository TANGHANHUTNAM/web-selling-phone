<template>
  <div class="col g-3">
    <div class="card card-item p-2 w-100 h-100 rounded-4 product-item-card">
      <router-link
        class="text-decoration-none text-dark"
        :to="{ name: 'ProductsDetails', params: { id: product.id } }"
      >
        <img :src="product.imgURL" class="card-img-top" alt="" />
        <div class="card-body p-1">
          <h5 class="card-title text-center">{{ product.name }}</h5>
          <p class="card-text w-100 m-0">
            {{ product.des }}
          </p>
          <div class="d-flex w-100 align-content-center my-2">
            <p class="product-item-price-new me-2">{{ product.price_new }}đ</p>
            <p class="product-item-price-old">{{ product.price_old }}đ</p>
          </div>
          <p>
            Đánh giá: {{ product.rating }}
            <i class="bi bi-star-fill product-item-rating"></i>
          </p>
        </div>
      </router-link>
      <div class="btn btn-primary mb-1">Thêm vào giỏ hàng</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGridItem",
  props: {
    product: {
      type: [Object, Array],
    }
  }
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
