<template>
  <div>
    <!-- Product details -->
    <section class="py-4" v-if="product">
      <div class="container">
        <div class="row gx-5">
          <aside class="col-lg-6">
            <div class="border rounded-4 mb-3 d-flex justify-content-center product-img">
              <div
                data-fslightbox="mygalley"
                class="rounded-4"
                target="_blank"
                data-type="image"
              >
                <img
                  class="rounded-4 fit p-3 product-img-main"
                  :src="`http://localhost:8081/${thumbnail[0].thumbnail_link}`"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center mb-3">
              <div
                v-for="thumb in thumbnail" :key="thumb._id"
                data-fslightbox="mygalley"
                class="border mx-1 rounded-2 product-img-thumb"
                target="_blank"
                data-type="image"
                @click="onToggleImage(thumb.thumbnail_link)"
              >
                <img 
                  width="60"
                  height="60"
                  class="rounded-2"
                  :src="`http://localhost:8081/${thumb.thumbnail_link}`"
                />
              </div>
        
            </div>
            <!-- thumbs-wrap.// -->
            <!-- gallery-wrap .end// -->
          </aside>
          <main class="col-lg-6">
            <div class="ps-lg-2">
              <h4 class="title text-dark">
                {{ product.title }}
              </h4>
              <div class="d-flex flex-row my-3">
                <div class="text-warning mb-1 me-2">
                  <i class="bi bi-star-fill"></i>
                  <span class="ms-1"> {{ product.star }} </span>
                </div>
                <span class="text-muted"
                  ><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 đã
                  bán</span
                >
                <span v-if="status" class="text-success ms-2">Còn hàng</span>
                <span v-else class="text-danger ms-2">Hết hàng</span>
              </div>

              <div class="mb-3">
                <span class="h5 product-new-price">{{ new_price }}đ</span>
                <span class="text-muted">/sản phẩm</span>
                <p>
                  <span class="product-details-old-price">
                    {{ old_price }}đ</span
                  >
                </p>
              </div>

              <h5 class="my-4">
                {{ product.des }}
              </h5>

              <div class="row">
                <dt class="col-3">Bộ nhớ</dt>
                <dd class="col-9">{{ product.rom }}</dd>
                <dt class="col-3">Hãng</dt>
                <dd class="col-9">{{ product.brand }}</dd>
              </div>

              <hr />

              <div class="row mb-4">
                <div class="col-md-4 col-6">
                  <label class="mb-2">Color</label>
                  <select
                    class="form-select border border-secondary"
                    style="height: 35px"
                  >
                    <option v-for="thumb in thumbnail" :key="thumb._id">{{ thumb.color }}</option>
                  </select>
                </div>
                <!-- col.// -->
                <!-- <div class="col-md-4 col-6 mb-3">
                  <label class="mb-2 d-block">Quantity</label>
                  <div class="input-group mb-3" style="width: 170px"></div>
                </div> -->
              </div>
              <div class="row">
                <div class="col-12 d-flex flex-row">
                  <a
                    href="#"
                    class="btn btn-warning shadow-0 w-100 me-1 d-flex text-white align-items-center justify-content-center"
                  >
                    Mua ngay
                  </a>
                  <a
                    href="#"
                    class="btn btn-primary shadow-0 w-100 ms-1 d-flex align-items-center justify-content-center"
                  >
                    <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
    <not-found v-else />
  
  </div>
</template>

<script>
import NotFound from "../../views/404Page.vue";
import axios from "axios"
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  components: {
    "not-found": NotFound,
  },
  setup() {
    const route = useRoute();
    const new_price = ref(null);
    const old_price = ref(null);
    const product = ref(null);
    const thumbnail = ref(null);
    const status = ref(null);
    const getProducts = async () => {
      const response = await axios.get(`http://localhost:8081/api/products/${route.params.id}`);
      product.value = response.data;
      thumbnail.value = response.data.thumbnail
      old_price.value = formatPrice(response.data.old_price);
      status.value = response.status;
      new_price.value = formatPrice(response.data.new_price);
    };
    
    function onToggleImage(thumbnail_link) {
      const mainImage = document.querySelector('.product-img-main');
      mainImage.src = `http://localhost:8081/${thumbnail_link}`;
    }

    function formatPrice(value) {
      if (!value) {
        return '';
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    onMounted(getProducts);
    return {
      product, thumbnail, new_price, old_price, status, onToggleImage
    };
  },
};
</script>

<style scoped>
.product-details-old-price {
  text-decoration: line-through;
}

.product-img{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.product-img-main{
  width: 20rem;
  height: 20rem;
}

.product-new-price{
  color: var(--primary-red);
}

.product-img-thumb {
  cursor: pointer;
}
</style>
