<template>
  <div class="col g-3">
    <div class="card card-item p-2 w-100 h-100 rounded-4 product-item-card d-flex flex-column">
      <router-link
        class="text-decoration-none text-dark d-flex flex-column h-100"
        :to="{ name: 'ProductsDetails', params: { id: product.id } }"
      >
        <img :src="product.imgURL" class="card-img-top" alt="" />
        <div class="card-body p-1">
          <h5 class="card-title d-flex justify-content-center align-items-center product-item-card-name">{{ product.name }}</h5>
          <p class="card-text w-100 m-0 product-item-card-des">
            {{ product.des }}
          </p>  
          <div class="d-flex w-100 align-items-center my-2 justify-content-between">
            <p class="product-item-price-new">{{ product.price_new }}đ</p>
            <small class="product-item-price-old">{{ product.price_old }}đ</small>
          </div>
          <p>
            Đánh giá: {{ product.rating }}
            <i class="bi bi-star-fill product-item-rating"></i>
          </p>
        </div>
      </router-link>
      <div class="btn btn-primary mb-1 btn-add-cart">Thêm vào giỏ hàng</div>
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
  margin: 0;
  color: var(--primary-red);
}
.product-item-price-old {
  margin: 0;
  text-decoration-line: line-through;
  color: var(--primary-red);
}

.product-item-card-name {
  height: 3rem;
}

.product-item-card-des {
  font-weight: 500;
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
}
</style>
